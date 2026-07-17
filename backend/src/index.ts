import 'dotenv/config';
import app from './app';
import { logger } from './utils/logger';
import { connectDatabase } from './utils/database';
import { connectRedis } from './utils/redis';
import { startReminderCron } from './services/cron.service';

const PORT = parseInt(process.env.PORT || '3001', 10);

async function bootstrap() {
  try {
    // Connect to database
    await connectDatabase();
    logger.info('✅ Database connected');

    // Connect to Redis
    await connectRedis();
    logger.info('✅ Redis connected');

    // Start reminder cron jobs
    startReminderCron();
    logger.info('✅ Cron jobs started');

    // Start server
    app.listen(PORT, () => {
      logger.info(`🚀 BirthdayHub API running on port ${PORT}`);
      logger.info(`📖 Swagger docs: http://localhost:${PORT}/api/docs`);
      logger.info(`🌍 Environment: ${process.env.NODE_ENV}`);
    });
  } catch (error) {
    logger.error('Failed to start server:', error);
    process.exit(1);
  }
}

bootstrap();

// Handle graceful shutdown
process.on('SIGTERM', () => {
  logger.info('SIGTERM signal received: closing HTTP server');
  process.exit(0);
});

process.on('SIGINT', () => {
  logger.info('SIGINT signal received: closing HTTP server');
  process.exit(0);
});

process.on('unhandledRejection', (reason) => {
  logger.error('Unhandled Rejection:', reason);
});
