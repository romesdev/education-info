import { Injectable } from '@nestjs/common';
import { CreateCityDto } from './dto/create-city.dto';
import { UpdateCityDto } from './dto/update-city.dto';
import { PrismaService } from '../prisma/prisma.service';

@Injectable()
export class CityService {
  constructor(private prisma: PrismaService) {}

  create(createCityDto: CreateCityDto) {
    return this.prisma.city.create({ data: createCityDto });
  }

  findAll() {
    return this.prisma.city.findMany();
  }

  findByName(search: string) {
    console.log(search);
    return this.prisma.city.findMany({
      where: {
        name: {
          contains: search,
          mode: 'insensitive',
        },
      },
    });
  }

  findByCode(code: string) {
    return this.prisma.city.findUnique({
      where: {
        code: code,
      },
      include: {
        schools: true,
      },
    });
  }

  findOne(id: string) {
    return this.prisma.city.findUnique({
      where: {
        id,
      },
      include: {
        schools: true,
      },
    });
  }

  update(id: string, updateCityDto: UpdateCityDto) {
    return this.prisma.city.update({
      where: {
        id: id,
      },
      data: updateCityDto,
    });
  }

  remove(id: string) {
    return this.prisma.city.delete({
      where: {
        id: id,
      },
    });
  }
}
