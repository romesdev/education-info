import { PrismaClient } from '@prisma/client';

import { states } from './data/states';
const prisma = new PrismaClient();

async function createData() {
  const stateOne = await prisma.state.findFirst({
    where: {
      uf: 'AC',
    },
  });

  const stateTwo = await prisma.state.findFirst({
    where: {
      uf: 'RO',
    },
  });

  const stateThree = await prisma.state.findFirst({
    where: {
      uf: 'CE',
    },
  });

  const cityOne = await prisma.city.create({
    data: {
      name: 'Acrelândia',
      code: '1200013',
      stateId: stateOne.id,
      area: 'Interior',
    },
  });

  const cityTwo = await prisma.city.create({
    data: {
      name: 'Vale do Paraíso',
      code: '1101807',
      stateId: stateTwo.id,
      area: 'Interior',
    },
  });

  const cityThree = await prisma.city.create({
    data: {
      name: 'Jaguaribe',
      code: '2306900',
      stateId: stateThree.id,
      area: 'Interior',
    },
  });

  const schoolOne = await prisma.school.create({
    data: {
      name: 'EMEIEF 17 DE JUNHO',
      code: '11047461',
      adminType: 'Municipal',
      localType: 'Urbana',
      cityId: cityTwo.id,
    },
  });

  const schoolTwo = await prisma.school.create({
    data: {
      name: 'EMEF MARIOMA PEREIRA DA SILVA',
      code: '11050594',
      adminType: 'Municipal',
      localType: 'Urbana',
      cityId: cityTwo.id,
    },
  });

  const schoolThree = await prisma.school.create({
    data: {
      name: 'EEEFM EURIDICE LOPES PEDROSO',
      code: '11024682',
      adminType: 'Municipal',
      localType: 'Urbana',
      cityId: cityTwo.id,
    },
  });

  const schoolFour = await prisma.school.create({
    data: {
      name: 'EMEIEF IZIDORO STEDILE',
      code: '11024828',
      adminType: 'Municipal',
      localType: 'Urbana',
      cityId: cityTwo.id,
    },
  });

  const schoolFive = await prisma.school.create({
    data: {
      name: 'EEEMTI JUSCELINO KUBITSCHEK DE OLIVEIRA',
      code: '11024968',
      adminType: 'Municipal',
      localType: 'Urbana',
      cityId: cityTwo.id,
    },
  });

  const schoolSix = await prisma.school.create({
    data: {
      name: 'EMEIEF PEDRO ALEIXO',
      code: '11025310',
      adminType: 'Municipal',
      localType: 'Urbana',
      cityId: cityTwo.id,
    },
  });

  const schoolSeven = await prisma.school.create({
    data: {
      name: 'EMEIEF POTY',
      code: '11025352',
      adminType: 'Municipal',
      localType: 'Urbana',
      cityId: cityTwo.id,
    },
  });

  const schoolEight = await prisma.school.create({
    data: {
      name: 'EMEIEF 17 COLEGIO TIRADENTES DA POLICIA MILITAR - CTPM XI JUNHO',
      code: '11025638',
      adminType: 'Municipal',
      localType: 'Urbana',
      cityId: cityTwo.id,
    },
  });

  const schoolNine = await prisma.school.create({
    data: {
      name: 'ESC ALTINA MAGALHAES DA SILVA',
      code: '12008966',
      adminType: 'Municipal',
      localType: 'Urbana',
      cityId: cityOne.id,
    },
  });

  const schoolTen = await prisma.school.create({
    data: {
      name: 'ESC MARIA DE JESUS RIBEIRO',
      code: '12009164',
      adminType: 'Municipal',
      localType: 'Rural',
      cityId: cityOne.id,
    },
  });

  const schoolEleven = await prisma.school.create({
    data: {
      name: 'POETA SINÓ PINHEIRO',
      code: '4444444',
      adminType: 'Municipal',
      localType: 'Urbana',
      cityId: cityThree.id,
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
      classification: 3,
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

  const indicatorNine = await prisma.indicator.create({
    data: {
      average: 9.2,
      quantity: 294,
      classification: 8,
      year: 2021,
      schoolId: schoolNine.id,
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

  const indicatorTen = await prisma.indicator.create({
    data: {
      average: 9.2,
      quantity: 294,
      classification: 2,
      year: 2021,
      schoolId: schoolTen.id,
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

  const indicatorEleven = await prisma.indicator.create({
    data: {
      average: 9.2,
      quantity: 294,
      classification: 5,
      year: 2021,
      schoolId: schoolEleven.id,
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

  console.log('all data created');
}

async function main() {
  // // 1. delete all data

  // indicators
  await prisma.indicator.deleteMany();
  console.log('deleted records in indicator table');

  // schools
  await prisma.school.deleteMany();
  console.log('deleted records in school table');

  // cities
  await prisma.city.deleteMany();
  console.log('deleted records in city table');

  // // states
  const response = await prisma.state.deleteMany();

  console.log('deleted records in state table');

  await prisma.state.createMany({
    data: states,
  });
  console.log('added state data');

  createData();

  console.log('seed finished');
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
