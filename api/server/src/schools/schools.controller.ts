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
import { SchoolsService } from './schools.service';
import { CreateSchoolDto } from './dto/create-school.dto';
import { UpdateSchoolDto } from './dto/update-school.dto';
import { FilterDto } from './dto/filter.dto';
import { ApiTags } from '@nestjs/swagger';
import { School } from './entities/school.entity';
import { ApiPaginatedResponse } from '../utils/custom-decorators/PaginationDecorator';
import { PaginatedOutputDto } from '../utils/pagination/dto/paginatedOutput.dto';

@Controller('schools')
@ApiTags('schools')
export class SchoolsController {
  constructor(private readonly schoolsService: SchoolsService) {}

  @Post()
  create(@Body() createSchoolDto: CreateSchoolDto) {
    return this.schoolsService.create(createSchoolDto);
  }

  @Get()
  findAll() {
    return this.schoolsService.findAll();
  }

  @Get('filter/')
  @ApiPaginatedResponse(School)
  findWhere(
    @Query() filterDTO: FilterDto,
  ): Promise<PaginatedOutputDto<School>> {
    return this.schoolsService.findWhere(filterDTO);
  }

  @Get('findByCity/:city')
  findByCity(@Param('city') city: string) {
    return this.schoolsService.findByCity(city);
  }

  @Get('findByUF/:uf')
  findByState(@Param('uf') uf: string) {
    return this.schoolsService.findByUF(uf);
  }

  @Get('findByName/:name')
  findByName(@Param('name') name: string) {
    return this.schoolsService.findByName(name);
  }

  @Get('findByLevel/:level')
  findByLevel(@Param('level') level: number) {
    return this.schoolsService.findByLevel(+level);
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.schoolsService.findOne(id);
  }
  @Get('findByCode/:code')
  findByCode(@Param('code') code: string) {
    return this.schoolsService.findByCode(code);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateSchoolDto: UpdateSchoolDto) {
    return this.schoolsService.update(id, updateSchoolDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.schoolsService.remove(id);
  }
}
