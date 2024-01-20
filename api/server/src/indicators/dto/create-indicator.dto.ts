import { ApiProperty } from '@nestjs/swagger';

export class CreateIndicatorDto {
  @ApiProperty()
  average: number;

  @ApiProperty()
  quantity: number;

  @ApiProperty()
  classification: number;

  @ApiProperty()
  year: number;

  @ApiProperty()
  schoolId: string;

  @ApiProperty()
  levelOne: number;

  @ApiProperty()
  levelTwo: number;

  @ApiProperty()
  levelThree: number;

  @ApiProperty()
  levelFour: number;

  @ApiProperty()
  levelFive: number;

  @ApiProperty()
  levelSix: number;

  @ApiProperty()
  levelSeven: number;

  @ApiProperty()
  levelEight: number;
}
