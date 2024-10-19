import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { WebServerService } from './web-server.service';
import { CreateWebServerDto } from './dto/create-web-server.dto';
import { UpdateWebServerDto } from './dto/update-web-server.dto';

@Controller('web-server')
export class WebServerController {
  constructor(private readonly webServerService: WebServerService) {}

  @Post()
  create(@Body() createWebServerDto: CreateWebServerDto) {
    return this.webServerService.create(createWebServerDto);
  }

  @Get()
  findAll() {
    return this.webServerService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.webServerService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateWebServerDto: UpdateWebServerDto) {
    return this.webServerService.update(+id, updateWebServerDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.webServerService.remove(+id);
  }
}
