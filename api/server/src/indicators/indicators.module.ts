import { Module } from '@nestjs/common';
import { IndicatorsService } from './indicators.service';
import { IndicatorsController } from './indicators.controller';
import { PrismaModule } from '../prisma/prisma.module';

@Module({
  controllers: [IndicatorsController],
  providers: [IndicatorsService],
  imports: [PrismaModule],
})
export class IndicatorsModule {}
