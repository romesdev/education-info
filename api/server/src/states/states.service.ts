import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { createPaginator } from 'prisma-pagination';
import { Prisma, State } from '@prisma/client';
import { UpdateStateDto } from './dto/update-state.dto';

@Injectable()
export class StatesService {
  constructor(private prisma: PrismaService) {}

  findAll() {
    return this.prisma.state.findMany();
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

  update(id: string, updateStateDto: UpdateStateDto) {
    return this.prisma.state.update({
      where: {
        id: id,
      },
      data: updateStateDto,
    });
  }

  remove(id: string) {
    return this.prisma.state.delete({
      where: {
        id: id,
      },
    });
  }
}
