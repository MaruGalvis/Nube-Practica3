import { Controller, Get, Post, Body, Patch, Param, Delete, ParseUUIDPipe } from '@nestjs/common';
import { DirectoriesService } from './directories.service';
import { CreateDirectoryDto } from './dto/create-directory.dto';
import { UpdateDirectoryDto } from './dto/partial-update-directory.dto';
import { PartialUpdateDirectoryDto } from './dto/update-directory.dto';
import { Put } from '@nestjs/common/decorators/http';

@Controller('directories')
export class DirectoriesController {
  constructor(private readonly directoriesService: DirectoriesService) {}

  @Post()
  create(@Body() createDirectoryDto: CreateDirectoryDto) {
    return this.directoriesService.create(createDirectoryDto);
  }

  @Get()
  findAll() {
    return this.directoriesService.findAll();
  }

  @Get(':id')
  findOne(@Param('id', ParseUUIDPipe) id: string) {
    return this.directoriesService.findOne(id);
  }

  @Put(':id')
  update(@Param('id', ParseUUIDPipe) id: string, @Body() updateDirectoryDto: UpdateDirectoryDto) {
    return this.directoriesService.update(id, updateDirectoryDto);
  }

  @Patch(':id')
  partialUpdate(@Param('id', ParseUUIDPipe) id: string, @Body() data: PartialUpdateDirectoryDto) {
    return this.directoriesService.partialUpdate(id, data);
  }

  @Delete(':id')
  remove(@Param('id', ParseUUIDPipe) id: string) {
    return this.directoriesService.remove(id);
  }
}
