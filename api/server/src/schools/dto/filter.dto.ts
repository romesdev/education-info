import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import { IsIn, IsOptional } from 'class-validator';
import { Transform } from 'class-transformer';

export type OrderBy = { key: string; direction: string };

export type ConditionWhere = { key: string; value: string };

export type Where = {
  where: ConditionWhere[];
};

export class FilterDto {
  @IsOptional()
  @Transform(({ value }) => {
    return Number(value);
  })
  @ApiProperty()
  page: number = 1;

  @IsOptional()
  @Transform(({ value }) => {
    return Number(value);
  })
  @ApiProperty()
  perPage: number = 5;

  @IsOptional()
  @ApiProperty()
  search?: string;

  @IsOptional()
  @ApiProperty()
  city?: string;

  @IsOptional()
  @Transform(({ value }) => {
    return value.toUpperCase();
  })
  @ApiProperty()
  state?: string;

  @IsOptional()
  @Transform(({ value }) => {
    return Number(value);
  })
  @ApiProperty()
  level?: string;

  @IsOptional()
  @IsIn(['asc', 'desc'])
  @ApiProperty()
  direction?: string = 'desc';
}
