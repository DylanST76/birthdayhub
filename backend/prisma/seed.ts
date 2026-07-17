import { PrismaClient } from '@prisma/client';
import bcrypt from 'bcryptjs';

const prisma = new PrismaClient();

async function main() {
  console.log('🌱 Seeding database...');

  // Create demo user
  const passwordHash = await bcrypt.hash('Demo1234!', 12);
  
  const user = await prisma.user.upsert({
    where: { email: 'demo@birthdayhub.app' },
    update: {},
    create: {
      email: 'demo@birthdayhub.app',
      username: 'demo',
      passwordHash,
      name: 'Demo User',
      emailVerified: true,
    },
  });

  console.log(`✅ Created user: ${user.email}`);

  // Create some tags
  const tags = await Promise.all([
    prisma.tag.upsert({ where: { name_userId: { name: 'Family', userId: user.id } }, update: {}, create: { name: 'Family', color: '#ff6b6b', userId: user.id } }),
    prisma.tag.upsert({ where: { name_userId: { name: 'Friends', userId: user.id } }, update: {}, create: { name: 'Friends', color: '#4ecdc4', userId: user.id } }),
    prisma.tag.upsert({ where: { name_userId: { name: 'Work', userId: user.id } }, update: {}, create: { name: 'Work', color: '#45b7d1', userId: user.id } }),
  ]);

  console.log(`✅ Created ${tags.length} tags`);

  // Create sample people
  const today = new Date();
  const people = await Promise.all([
    prisma.person.create({
      data: {
        userId: user.id,
        firstName: 'Maria',
        lastName: 'Garcia',
        birthDate: new Date(today.getFullYear(), today.getMonth(), today.getDate() + 7),
        birthYear: 1990,
        relationship: 'sister',
        email: 'maria@example.com',
        phone: '+1234567890',
        notes: 'Loves chocolate cake!',
        tags: { connect: [{ id: tags[0].id }] },
      },
    }),
    prisma.person.create({
      data: {
        userId: user.id,
        firstName: 'Carlos',
        lastName: 'Lopez',
        birthDate: new Date(today.getFullYear(), today.getMonth(), today.getDate() + 15),
        birthYear: 1988,
        relationship: 'friend',
        email: 'carlos@example.com',
        tags: { connect: [{ id: tags[1].id }] },
      },
    }),
    prisma.person.create({
      data: {
        userId: user.id,
        firstName: 'Ana',
        lastName: 'Martinez',
        birthDate: new Date(today.getFullYear(), today.getMonth() + 1, 5),
        birthYear: 1995,
        relationship: 'colleague',
        tags: { connect: [{ id: tags[2].id }] },
      },
    }),
  ]);

  console.log(`✅ Created ${people.length} sample people`);
  console.log('🎉 Seed completed!');
  console.log('\n🔑 Demo credentials:');
  console.log('  Email: demo@birthdayhub.app');
  console.log('  Password: Demo1234!');
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
