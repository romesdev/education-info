import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  Query,
} from '@nestjs/common';
import { StatesService } from './states.service';
import { ApiTags } from '@nestjs/swagger';
import { State } from './entities/state.entity';
import { ApiPaginatedResponse } from '../utils/custom-decorators/PaginationDecorator';
import { PaginatedOutputDto } from '../utils/pagination/dto/paginatedOutput.dto';
import { createPaginator } from 'prisma-pagination';
import { Prisma } from '@prisma/client';
import { PrismaService } from '../prisma/prisma.service';

@Controller('states')
@ApiTags('states')
export class StatesController {
  constructor(private readonly statesService: StatesService) {}

  @Get()
  findAll() {
    return this.statesService.findAll();
  }

  @Get('findByCode/:code')
  findByCode(@Param('code') code: number) {
    return this.statesService.findByCode(+code);
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.statesService.findOne(id);
  }
}
