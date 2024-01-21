import { ApiProperty } from '@nestjs/swagger';
import {
  IsIn,
  IsNotEmpty,
  IsString,
  MaxLength,
  IsNumber,
  IsUUID,
} from 'class-validator';

export class CreateIndicatorDto {
  @IsNumber()
  @IsNotEmpty()
  @ApiProperty()
  average: number;

  @IsNumber()
  @IsNotEmpty()
  @ApiProperty()
  quantity: number;

  @IsNumber()
  @IsNotEmpty()
  @IsIn([1, 2, 3, 4, 5, 6, 7, 8])
  @ApiProperty()
  classification: number;

  @IsNumber()
  @IsNotEmpty()
  @ApiProperty()
  year: number;

  @IsUUID()
  @ApiProperty()
  schoolId: string;

  @IsNumber()
  @IsNotEmpty()
  @ApiProperty()
  levelOne: number;

  @IsNumber()
  @IsNotEmpty()
  @ApiProperty()
  levelTwo: number;

  @IsNumber()
  @IsNotEmpty()
  @ApiProperty()
  levelThree: number;

  @IsNumber()
  @IsNotEmpty()
  @ApiProperty()
  levelFour: number;

  @IsNumber()
  @IsNotEmpty()
  @ApiProperty()
  levelFive: number;

  @IsNumber()
  @IsNotEmpty()
  @ApiProperty()
  levelSix: number;

  @IsNumber()
  @IsNotEmpty()
  @ApiProperty()
  levelSeven: number;

  @IsNumber()
  @IsNotEmpty()
  @ApiProperty()
  levelEight: number;
}
