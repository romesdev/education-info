import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { createPaginator } from 'prisma-pagination';
import { Prisma, State } from '@prisma/client';

@Injectable()
export class StatesService {
  constructor(private prisma: PrismaService) {}

  findAll(page: number, perPage: number, region: string, direction: string) {
    const paginate = createPaginator({ perPage: perPage });

    let where = {};

    if (region !== '') {
      where = {
        region: region,
      };
    }

    return paginate<State, Prisma.StateFindManyArgs>(
      this.prisma.state,
      {
        where: where,
        orderBy: {
          code: 'asc',
        },
      },
      {
        page,
      },
    );
  }

  findByCode(code: number) {
    return this.prisma.state.findUnique({
      where: {
        code,
      },
    });
  }

  findOne(id: string) {
    return this.prisma.state.findUnique({
      where: {
        id,
      },
    });
  }
}
