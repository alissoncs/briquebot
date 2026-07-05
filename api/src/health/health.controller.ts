import { Controller, Get } from '@nestjs/common';

@Controller('health')
export class HealthController {
  @Get()
  check() {
    return {
      status: 'ok',
      db: Boolean(process.env.DATABASE_URL),
      ts: new Date().toISOString(),
    };
  }
}

