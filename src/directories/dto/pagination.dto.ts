import { ApiProperty } from '@nestjs/swagger';
import { Type } from 'class-transformer';
import { IsPositive, Min } from 'class-validator';

export class PaginationDto {
    @ApiProperty()
    @Min(0)
    @Type(() => Number)
    page: number = 1;

    @ApiProperty()
    @IsPositive()
    @Type(() => Number)
    limit: number = 10;
}