import { Controller, Get } from '@nestjs/common';
import { ApiTags, ApiOperation, ApiResponse } from '@nestjs/swagger';

@ApiTags('Status')
@Controller('status')
export class StatusController {

  @Get()
  @ApiOperation({ summary: 'Pong' })
  @ApiResponse({ status: 200, description: 'Pong' })
  findAll() {
    return "pong";

  }
}
