import { BadRequestException, Injectable, NotFoundException } from '@nestjs/common';
import { CreateDirectoryDto } from './dto/create-directory.dto';
import { UpdateDirectoryDto } from './dto/partial-update-directory.dto';
import { PartialUpdateDirectoryDto } from './dto/update-directory.dto';
import { v4 as uuid } from 'uuid';
import { InjectRepository } from '@nestjs/typeorm';
import { Directory } from './entities/directory.entity';
import { Repository } from 'typeorm';

@Injectable()
export class DirectoriesService {

  constructor(
    @InjectRepository(Directory)
    private readonly directoriesRepository: Repository<Directory>,
  ) {}

  async create(data: CreateDirectoryDto) {
    try {
      const id = uuid();
      const directory = this.directoriesRepository.create({id, ...data});
      await this.directoriesRepository.save(directory);
      return directory;
    } catch (error) {
      return BadRequestException;
    }
  }

  findAll() {
    return this.directoriesRepository.find();
  }

  async findOne(id: string) {
    const directory = await this.directoriesRepository.findOneBy({id});
    if (!directory) {
      throw new NotFoundException(`Directory with id ${id} not found`);
    }
    return directory;
  }

  async update(id: string, data: UpdateDirectoryDto) {
    const directory = await this.findOne(id);
    if (!directory) {
      return new NotFoundException();
    }
    directory.name = data.name;
    directory.emails = data.emails;
    await this.directoriesRepository.update(id, directory);
    return directory;
  }

  async partialUpdate(id: string, data: PartialUpdateDirectoryDto) {
    const directory = await this.findOne(id);
    if (!directory) {
      return new NotFoundException();
    }
    if (data.name) {
      directory.name = data.name;
    }
    if (data.emails) {
      directory.emails = data.emails;
    }
    await this.directoriesRepository.update(id, directory);
    return directory;
  }

  async remove(id: string) {
    const directory = await this.findOne(id);
    if (!directory) {
      return new NotFoundException();
    }
    await this.directoriesRepository.delete(id);
  }
}
