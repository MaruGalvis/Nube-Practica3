import { PartialType } from '@nestjs/mapped-types';
import { CreateWebServerDto } from './create-web-server.dto';

export class UpdateWebServerDto extends PartialType(CreateWebServerDto) {}
