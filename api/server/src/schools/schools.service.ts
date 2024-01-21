import { Injectable, Query } from '@nestjs/common';
import { CreateSchoolDto } from './dto/create-school.dto';
import { UpdateSchoolDto } from './dto/update-school.dto';
import { PrismaService } from '../prisma/prisma.service';
import { FilterDto } from './dto/filter.dto';
import { Prisma } from '@prisma/client';
import { School } from './entities/school.entity';
import { createPaginator } from 'prisma-pagination';

@Injectable()
export class SchoolsService {
  constructor(private prisma: PrismaService) {}

  create(createSchoolDto: CreateSchoolDto) {
    return this.prisma.school.create({ data: createSchoolDto });
  }

  findAll() {
    return this.prisma.school.findMany({
      include: {
        indicators: true,
        city: true,
      },
    });
  }

  findWhere(query: FilterDto) {
    const { search, state, city, level, direction, page, perPage } = query;
    console.log(query);
    console.log(perPage);
    let where = {};
    let cityWhere = {};
    let indicatorsWhere = {};

    const paginate = createPaginator({ perPage: perPage });

    if (search) {
      where = {
        name: {
          contains: search,
          mode: 'insensitive',
        },
      };
    }
    if (city) {
      cityWhere = {
        name: {
          contains: city,
          mode: 'insensitive',
        },
      };

      where = {
        ...where,
        city: cityWhere,
      };
    }

    if (state) {
      where = {
        ...where,
        city: {
          ...cityWhere,
          state: {
            uf: state,
          },
        },
      };
    }

    if (level) {
      const levelNumber = Number(level);
      where = {
        ...where,
        indicators: {
          some: {
            classification: levelNumber,
          },
        },
      };

      indicatorsWhere = {
        classification: levelNumber,
      };
    }

    // if (orderByKey !== null && orderByValue !== null) {
    //   orderBy = { [orderByKey]: orderByValue };
    // }

    console.log('indicators', indicatorsWhere);
    console.log('where', where);

    // return this.prisma.school.findMany();

    return paginate<School, Prisma.SchoolFindManyArgs>(
      this.prisma.school,
      {
        where: where,
        include: {
          indicators: {
            where: indicatorsWhere,
            orderBy: {
              classification: direction === 'asc' ? 'asc' : 'desc',
            },
          },
          city: true,
        },
        orderBy: {
          name: direction === 'asc' ? 'asc' : 'desc',
        },
      },
      {
        page,
      },
    );
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

  update(id: string, updateSchoolDto: UpdateSchoolDto) {
    return this.prisma.school.update({
      where: {
        id: id,
      },
      data: updateSchoolDto,
    });
  }

  remove(id: string) {
    return this.prisma.school.delete({ where: { id: id } });
  }
}
