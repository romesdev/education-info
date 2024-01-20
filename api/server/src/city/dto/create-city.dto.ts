import { ApiProperty } from '@nestjs/swagger';

export class CreateCityDto {
  @ApiProperty()
  code: string;

  @ApiProperty()
  name: string;

  @ApiProperty()
  stateId: string;

  @ApiProperty()
  area: string;
}
