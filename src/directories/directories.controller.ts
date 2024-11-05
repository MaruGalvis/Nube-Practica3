import { Controller, Get, Post, Body, Patch, Param, Delete, ParseUUIDPipe } from '@nestjs/common';
import { DirectoriesService } from './directories.service';
import { CreateDirectoryDto } from './dto/create-directory.dto';
import { UpdateDirectoryDto } from './dto/partial-update-directory.dto';
import { PartialUpdateDirectoryDto } from './dto/update-directory.dto';
import { Put, Query } from '@nestjs/common/decorators/http';
import { ApiTags, ApiOperation, ApiResponse } from '@nestjs/swagger';
import { PaginationDto } from './dto/pagination.dto';

@ApiTags('Directories')
@Controller('directories')
export class DirectoriesController {
  constructor(private readonly directoriesService: DirectoriesService) {}

  @Get()
  @ApiOperation({ summary: 'Obtener todos los directorios' })
  @ApiResponse({ status: 200, description: 'Lista de directorios.' })
  async findAll(@Query() paginationDto: PaginationDto) {
    const { page, limit } = paginationDto;
    const { count, results } = await this.directoriesService.findAll(page, limit);
    const next = page * limit < count ? `http://localhost:3000/directories?page=${page + 1}&limit=${limit}` : null;
    let previous: string = null;
    if (page > 1 && page * limit < count) {
      previous = `http://localhost:3000/directories?page=${page + 1}&limit=${limit}`;
    }
    return {
      count,
      next,
      previous,
      results,
    };
  }
  
  @Post()
  @ApiOperation({ summary: 'Crear un nuevo directorio' })
  @ApiResponse({ status: 201, description: 'El directorio ha sido creado.' })
  create(@Body() createDirectoryDto: CreateDirectoryDto) {
    return this.directoriesService.create(createDirectoryDto);
  }

  @Get(':id')
  @ApiOperation({ summary: 'Obtener un directorio por ID' })
  @ApiResponse({ status: 200, description: 'El directorio encontrado.' })
  findOne(@Param('id', ParseUUIDPipe) id: string) {
    return this.directoriesService.findOne(id);
  }

  @Put(':id')
  @ApiOperation({ summary: 'Actualizar un directorio por ID' })
  @ApiResponse({ status: 200, description: 'El directorio ha sido actualizado.' })
  update(@Param('id', ParseUUIDPipe) id: string, @Body() updateDirectoryDto: UpdateDirectoryDto) {
    return this.directoriesService.update(id, updateDirectoryDto);
  }

  @Patch(':id')
  @ApiOperation({ summary: 'Actualizar parcialmente un directorio por ID' })
  @ApiResponse({ status: 200, description: 'El directorio ha sido parcialmente actualizado.' })
  partialUpdate(@Param('id', ParseUUIDPipe) id: string, @Body() data: PartialUpdateDirectoryDto) {
    return this.directoriesService.partialUpdate(id, data);
  }

  @Delete(':id')
  @ApiOperation({ summary: 'Eliminar un directorio por ID' })
  @ApiResponse({ status: 200, description: 'El directorio ha sido eliminado.' })
  remove(@Param('id', ParseUUIDPipe) id: string) {
    return this.directoriesService.remove(id);
  }
}
