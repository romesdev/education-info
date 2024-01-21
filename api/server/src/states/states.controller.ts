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
  @ApiPaginatedResponse(State)
  findAll(
    @Query('page') page: number = 1,
    @Query('perPage') perPage: number = 10,
    @Query('region') region?: string,
    @Query('direction') direction: string = 'asc',

    // @Query('perPage') perPage: number = 10,
    // @Query('perPage') perPage: number = 10,
  ): Promise<PaginatedOutputDto<State>> {
    return this.statesService.findAll(page, perPage, region, direction);
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
