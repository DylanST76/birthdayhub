import Redis from 'ioredis';
import { logger } from './logger';

let redisClient: Redis | null = null;

export function getRedis(): Redis {
  if (!redisClient) {
    throw new Error('Redis not connected. Call connectRedis() first.');
  }
  return redisClient;
}

export async function connectRedis(): Promise<void> {
  const url = process.env.REDIS_URL || 'redis://localhost:6379';
  
  redisClient = new Redis(url, {
    retryStrategy: (times) => {
      if (times > 10) return null;
      return Math.min(times * 200, 3000);
    },
    maxRetriesPerRequest: 3,
    lazyConnect: true,
  });

  redisClient.on('error', (err) => logger.error('Redis error:', err));
  redisClient.on('connect', () => logger.debug('Redis connected'));

  await redisClient.connect();
}

export async function setCache(key: string, value: unknown, ttlSeconds = 300): Promise<void> {
  const redis = getRedis();
  await redis.setex(key, ttlSeconds, JSON.stringify(value));
}

export async function getCache<T>(key: string): Promise<T | null> {
  const redis = getRedis();
  const data = await redis.get(key);
  if (!data) return null;
  return JSON.parse(data) as T;
}

export async function deleteCache(key: string): Promise<void> {
  const redis = getRedis();
  await redis.del(key);
}

export async function deleteCachePattern(pattern: string): Promise<void> {
  const redis = getRedis();
  const keys = await redis.keys(pattern);
  if (keys.length > 0) {
    await redis.del(...keys);
  }
}
