import { City, Indicator } from '@prisma/client';

export class School {
  id: string;
  code: string;
  name: string;
  cityId: string;
  city: City;
  adminType: string;
  localType: string;
  indicator: Indicator[];
}
