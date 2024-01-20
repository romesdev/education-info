import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { StatesService } from './states.service';

@Controller('states')
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
