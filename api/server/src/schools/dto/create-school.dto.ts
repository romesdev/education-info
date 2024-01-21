import { ApiProperty } from '@nestjs/swagger';
import { IsIn, IsNotEmpty, IsString, IsUUID, MaxLength } from 'class-validator';

export const adminTypes = ['Municipal', 'Estadual', 'Federal'] as const;
export const localTypes = ['Urbana', 'Rural'] as const;

export class CreateSchoolDto {
  @IsString()
  @MaxLength(50)
  @IsNotEmpty()
  @ApiProperty()
  code: string;

  @IsString()
  @MaxLength(255)
  @IsNotEmpty()
  @ApiProperty()
  name: string;

  @IsString()
  @IsNotEmpty()
  @IsUUID()
  @ApiProperty()
  cityId: string;

  @IsString()
  @IsNotEmpty()
  @IsIn(adminTypes)
  @ApiProperty()
  adminType: string;

  @IsString()
  @IsNotEmpty()
  @IsIn(localTypes)
  @ApiProperty()
  localType: string;
}
