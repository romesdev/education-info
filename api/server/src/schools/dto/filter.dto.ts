import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';

export type OrderBy = { key: string; direction: string };

export type ConditionWhere = { key: string; value: string };

export type Where = {
  where: ConditionWhere[];
};

export class FilterDto {
  @ApiProperty()
  search?: string;

  @ApiProperty()
  whereByKey?: string;

  @ApiProperty()
  whereByValue?: string | number;

  @ApiProperty()
  orderByKey?: string;

  @ApiProperty()
  orderByValue?: string;
}
