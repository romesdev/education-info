import { PrismaClient } from '@prisma/client';
import { states } from './data/states';
const prisma = new PrismaClient();

async function main() {
  await prisma.state.deleteMany();
  console.log('Deleted records in state table');
  await prisma.state.createMany({
    data: states,
  });
  console.log('Added state data');
}

// execute the main function
main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    // close Prisma Client at the end
    await prisma.$disconnect();
  });
