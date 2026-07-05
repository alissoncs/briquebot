import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { HealthController } from './health/health.controller';

// TypeORM is registered only when DATABASE_URL is present, so the app boots
// (and the health check answers) without a database during the scaffold phase.
@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }),
    ...(process.env.DATABASE_URL
      ? [
          TypeOrmModule.forRoot({
            type: 'postgres',
            url: process.env.DATABASE_URL,
            autoLoadEntities: true,
            synchronize: false,
          }),
        ]
      : []),
  ],
  controllers: [HealthController],
})
export class AppModule {}

