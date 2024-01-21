import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { IndicatorsService } from './indicators.service';
import { CreateIndicatorDto } from './dto/create-indicator.dto';
import { UpdateIndicatorDto } from './dto/update-indicator.dto';
import { ApiTags } from '@nestjs/swagger';

@Controller('indicators')
@ApiTags('indicators')
export class IndicatorsController {
  constructor(private readonly indicatorsService: IndicatorsService) {}

  @Post()
  create(@Body() createIndicatorDto: CreateIndicatorDto) {
    return this.indicatorsService.create(createIndicatorDto);
  }

  @Get()
  findAll() {
    return this.indicatorsService.findAll();
  }

  @Get('findBySchool/:schoolId')
  findBySchool(@Param('schoolId') schoolId: string) {
    return this.indicatorsService.findBySchool(schoolId);
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.indicatorsService.findOne(id);
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateIndicatorDto: UpdateIndicatorDto,
  ) {
    return this.indicatorsService.update(id, updateIndicatorDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.indicatorsService.remove(id);
  }
}
