import { Injectable } from '@nestjs/common';
import { CreateIndicatorDto } from './dto/create-indicator.dto';
import { UpdateIndicatorDto } from './dto/update-indicator.dto';
import { PrismaService } from '../prisma/prisma.service';

@Injectable()
export class IndicatorsService {
  constructor(private prisma: PrismaService) {}

  create(createIndicatorDto: CreateIndicatorDto) {
    return this.prisma.indicator.create({ data: createIndicatorDto });
  }

  findAll() {
    return this.prisma.indicator.findMany();
  }

  findBySchool(schoolId: string) {
    return this.prisma.indicator.findMany({
      where: {
        schoolId: schoolId,
      },
      include: {
        school: true,
      },
    });
  }

  findOne(id: string) {
    return this.prisma.indicator.findUnique({
      where: {
        id: id,
      },
    });
  }

  update(id: string, updateIndicatorDto: UpdateIndicatorDto) {
    return this.prisma.indicator.update({
      where: {
        id: id,
      },
      data: updateIndicatorDto,
    });
  }

  remove(id: string) {
    return this.prisma.indicator.delete({
      where: {
        id: id,
      },
    });
  }
}
