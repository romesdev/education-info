import { ApiProperty } from '@nestjs/swagger';

export class CreateSchoolDto {
  @ApiProperty()
  code: string;

  @ApiProperty()
  name: string;

  @ApiProperty()
  cityId: string;

  @ApiProperty()
  adminType: string;

  @ApiProperty()
  localType: string;
}
