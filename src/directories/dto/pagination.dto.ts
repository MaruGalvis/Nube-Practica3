import { ApiPropertyOptional } from '@nestjs/swagger';
import { Type } from 'class-transformer';
import { IsOptional, IsPositive, Min } from 'class-validator';

export class PaginationDto {
    @ApiPropertyOptional({ default: 1 })
    @IsOptional()
    @Min(0)
    @Type(() => Number)
    page: number;

    @ApiPropertyOptional({ default: 5 })
    @IsOptional()
    @IsPositive()
    @Type(() => Number)
    limit: number;
}