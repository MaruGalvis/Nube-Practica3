import { Module } from '@nestjs/common';
import { WebServerService } from './web-server.service';
import { WebServerController } from './web-server.controller';

@Module({
  controllers: [WebServerController],
  providers: [WebServerService],
})
export class WebServerModule {}
