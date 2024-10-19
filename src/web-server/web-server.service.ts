import { Injectable } from '@nestjs/common';
import { CreateWebServerDto } from './dto/create-web-server.dto';
import { UpdateWebServerDto } from './dto/update-web-server.dto';

@Injectable()
export class WebServerService {
  create(createWebServerDto: CreateWebServerDto) {
    return 'This action adds a new webServer';
  }

  findAll() {
    return `This action returns all webServer`;
  }

  findOne(id: number) {
    return `This action returns a #${id} webServer`;
  }

  update(id: number, updateWebServerDto: UpdateWebServerDto) {
    return `This action updates a #${id} webServer`;
  }

  remove(id: number) {
    return `This action removes a #${id} webServer`;
  }
}
