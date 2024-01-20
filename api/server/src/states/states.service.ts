import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';

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
}
