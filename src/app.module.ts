import { Module } from '@nestjs/common'
import { AppController } from './app.controller'
import { AppService } from './app.service'
import { EnvConfigModule } from './shared/infrastructure/env-config/env-config.module'
import { CoursesModule } from './courses/courses.module'

@Module({
  imports: [EnvConfigModule, CoursesModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
