import { Injectable, Query } from '@nestjs/common';
import { CreateSchoolDto } from './dto/create-school.dto';
import { UpdateSchoolDto } from './dto/update-school.dto';
import { PrismaService } from '../prisma/prisma.service';
import { FilterDto } from './dto/filter.dto';

@Injectable()
export class SchoolsService {
  constructor(private prisma: PrismaService) {}

  create(createSchoolDto: CreateSchoolDto) {
    return this.prisma.school.create({ data: createSchoolDto });
  }

  findAll(take: number) {
    return this.prisma.school.findMany({
      skip: 2,
      take: take,
      include: {
        indicators: true,
        city: true,
      },
    });
  }

  findWhere(query: FilterDto) {
    const { search, orderByKey, orderByValue, whereByKey, whereByValue } =
      query;
    console.log(query);
    let where = {};
    let orderBy = {};

    if (search) {
      where = {
        name: {
          contains: search,
          mode: 'insensitive',
        },
      };

      if (whereByKey !== null && whereByValue != null) {
        where = {
          ...where,
          [whereByKey]: {
            equals: whereByValue,
          },
        };
      }
    }

    if (orderByKey !== null && orderByValue !== null) {
      orderBy = { [orderByKey]: orderByValue };
    }

    return this.prisma.school.findMany({
      where: where,
      include: {
        indicators: true,
        city: true,
      },
      orderBy,
    });
  }

  async findByCity(city: string) {
    const response = await this.prisma.school.findMany({
      where: {
        city: {
          name: city,
        },
      },
      include: {
        indicators: true,
        city: true,
      },
    });

    console.log(response);

    return response;
  }

  async findByName(search: string) {
    const response = await this.prisma.school.findMany({
      where: {
        name: {
          contains: search,
          mode: 'insensitive',
        },
      },
      include: {
        indicators: true,
        city: true,
      },
    });

    console.log(response);

    return response;
  }

  async findByUF(uf: string) {
    const response = await this.prisma.school.findMany({
      where: {
        city: {
          state: {
            uf: uf,
          },
        },
      },
      include: {
        indicators: true,
        city: true,
      },
    });

    console.log(response);

    return response;
  }

  async findByLevel(level: number) {
    console.log(level);
    const response = await this.prisma.school.findMany({
      where: {
        indicators: {
          some: {
            classification: level,
          },
        },
      },
      include: {
        indicators: {
          where: {
            classification: level,
          },
        },
        city: true,
      },
    });

    console.log(response);

    return response;
  }

  findByCode(code: string) {
    return this.prisma.school.findUnique({
      where: {
        code: code,
      },
      include: {
        indicators: true,
      },
    });
  }

  findOne(id: string) {
    return this.prisma.school.findUnique({
      where: {
        id,
      },
      include: {
        indicators: true,
      },
    });
  }

  update(id: number, updateSchoolDto: UpdateSchoolDto) {
    return `This action updates a #${id} school`;
  }

  remove(id: number) {
    return `This action removes a #${id} school`;
  }
}
