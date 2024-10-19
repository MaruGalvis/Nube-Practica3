import { Module } from '@nestjs/common';
import { DirectoriesService } from './directories.service';
import { DirectoriesController } from './directories.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Directory } from './entities/directory.entity';

@Module({
  controllers: [DirectoriesController],
  providers: [DirectoriesService],
  imports: [TypeOrmModule.forFeature([Directory])],
})
export class DirectoriesModule {}
