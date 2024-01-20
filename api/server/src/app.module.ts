import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PrismaModule } from './prisma/prisma.module';
import { StatesModule } from './states/states.module';
import { CityModule } from './city/city.module';
import { SchoolsModule } from './schools/schools.module';
import { IndicatorsModule } from './indicators/indicators.module';

@Module({
  imports: [PrismaModule, StatesModule, CityModule, SchoolsModule, IndicatorsModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
