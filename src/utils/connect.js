import { PrismaClient } from '@prisma/client';

let prisma;

// In production, create a new PrismaClient instance
if (process.env.NODE_ENV === 'production') {
  prisma = new PrismaClient();
} else {
  // In development, use a global instance to prevent creating multiple instances due to hot-reloading
  if (!global.prisma) {
    global.prisma = new PrismaClient();
  }
  prisma = global.prisma;
}

export default prisma;
