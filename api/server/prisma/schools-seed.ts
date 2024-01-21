import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
  const schoolOne = await prisma.school.create({
    data: {
      name: 'EMEIEF 17 DE JUNHO',
      code: '11047461',
      adminType: 'Municipal',
      localType: 'Urbana',
      cityId: 'c0ad79df-d957-4fa4-a882-6a0d009864ce',
    },
  });

  const schoolTwo = await prisma.school.create({
    data: {
      name: 'EMEF MARIOMA PEREIRA DA SILVA',
      code: '11050594',
      adminType: 'Municipal',
      localType: 'Urbana',
      cityId: 'c0ad79df-d957-4fa4-a882-6a0d009864ce',
    },
  });

  const schoolThree = await prisma.school.create({
    data: {
      name: 'EEEFM EURIDICE LOPES PEDROSO',
      code: '11024682',
      adminType: 'Municipal',
      localType: 'Urbana',
      cityId: 'c0ad79df-d957-4fa4-a882-6a0d009864ce',
    },
  });

  const schoolFour = await prisma.school.create({
    data: {
      name: 'EMEIEF IZIDORO STEDILE',
      code: '11024828',
      adminType: 'Municipal',
      localType: 'Urbana',
      cityId: 'c0ad79df-d957-4fa4-a882-6a0d009864ce',
    },
  });

  const schoolFive = await prisma.school.create({
    data: {
      name: 'EEEMTI JUSCELINO KUBITSCHEK DE OLIVEIRA',
      code: '11024968',
      adminType: 'Municipal',
      localType: 'Urbana',
      cityId: 'c0ad79df-d957-4fa4-a882-6a0d009864ce',
    },
  });

  const schoolSix = await prisma.school.create({
    data: {
      name: 'EMEIEF PEDRO ALEIXO',
      code: '11025310',
      adminType: 'Municipal',
      localType: 'Urbana',
      cityId: 'c0ad79df-d957-4fa4-a882-6a0d009864ce',
    },
  });

  const schoolSeven = await prisma.school.create({
    data: {
      name: 'EMEIEF POTY',
      code: '11025352',
      adminType: 'Municipal',
      localType: 'Urbana',
      cityId: 'c0ad79df-d957-4fa4-a882-6a0d009864ce',
    },
  });

  const schoolEight = await prisma.school.create({
    data: {
      name: 'EMEIEF 17 COLEGIO TIRADENTES DA POLICIA MILITAR - CTPM XI JUNHO',
      code: '11025638',
      adminType: 'Municipal',
      localType: 'Urbana',
      cityId: 'c0ad79df-d957-4fa4-a882-6a0d009864ce',
    },
  });

  const indicatorOne = await prisma.indicator.create({
    data: {
      average: 9.2,
      quantity: 294,
      classification: 7,
      year: 2021,
      schoolId: schoolOne.id,
      levelOne: 4.0,
      levelTwo: 12.2,
      levelThree: 12.1,
      levelFour: 12.2,
      levelFive: 4.4,
      levelSix: 5.5,
      levelSeven: 0.0,
      levelEight: 0.0,
    },
  });

  const indicatorTwo = await prisma.indicator.create({
    data: {
      average: 9.2,
      quantity: 294,
      classification: 7,
      year: 2021,
      schoolId: schoolTwo.id,
      levelOne: 4.0,
      levelTwo: 12.2,
      levelThree: 12.1,
      levelFour: 12.2,
      levelFive: 4.4,
      levelSix: 5.5,
      levelSeven: 0.0,
      levelEight: 0.0,
    },
  });

  const indicatorThree = await prisma.indicator.create({
    data: {
      average: 9.2,
      quantity: 294,
      classification: 5,
      year: 2021,
      schoolId: schoolThree.id,
      levelOne: 4.0,
      levelTwo: 12.2,
      levelThree: 12.1,
      levelFour: 12.2,
      levelFive: 4.4,
      levelSix: 5.5,
      levelSeven: 0.0,
      levelEight: 0.0,
    },
  });

  const indicatorFour = await prisma.indicator.create({
    data: {
      average: 9.2,
      quantity: 294,
      classification: 2,
      year: 2021,
      schoolId: schoolFour.id,
      levelOne: 4.0,
      levelTwo: 12.2,
      levelThree: 12.1,
      levelFour: 12.2,
      levelFive: 4.4,
      levelSix: 5.5,
      levelSeven: 0.0,
      levelEight: 0.0,
    },
  });
  const indicatorFive = await prisma.indicator.create({
    data: {
      average: 9.2,
      quantity: 294,
      classification: 7,
      year: 2021,
      schoolId: schoolFive.id,
      levelOne: 4.0,
      levelTwo: 12.2,
      levelThree: 12.1,
      levelFour: 12.2,
      levelFive: 4.4,
      levelSix: 5.5,
      levelSeven: 0.0,
      levelEight: 0.0,
    },
  });

  const indicatorSix = await prisma.indicator.create({
    data: {
      average: 9.2,
      quantity: 294,
      classification: 7,
      year: 2021,
      schoolId: schoolSix.id,
      levelOne: 4.0,
      levelTwo: 12.2,
      levelThree: 12.1,
      levelFour: 12.2,
      levelFive: 4.4,
      levelSix: 5.5,
      levelSeven: 0.0,
      levelEight: 0.0,
    },
  });
  const indicatorSeven = await prisma.indicator.create({
    data: {
      average: 9.2,
      quantity: 294,
      classification: 7,
      year: 2021,
      schoolId: schoolSeven.id,
      levelOne: 4.0,
      levelTwo: 12.2,
      levelThree: 12.1,
      levelFour: 12.2,
      levelFive: 4.4,
      levelSix: 5.5,
      levelSeven: 0.0,
      levelEight: 0.0,
    },
  });

  const indicatorEight = await prisma.indicator.create({
    data: {
      average: 9.2,
      quantity: 294,
      classification: 7,
      year: 2021,
      schoolId: schoolEight.id,
      levelOne: 4.0,
      levelTwo: 12.2,
      levelThree: 12.1,
      levelFour: 12.2,
      levelFive: 4.4,
      levelSix: 5.5,
      levelSeven: 0.0,
      levelEight: 0.0,
    },
  });

  console.log('all data of schools and indicators saved');
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
