import { Module } from '@nestjs/common'
import { AppController } from './app.controller'
import { AppService } from './app.service'
import { EnvConfigModule } from './shared/infrastructure/env-config/env-config.module'
import { CoursesController } from './courses/courses.controller'
import { CoursesService } from './courses/courses.service'

@Module({
  imports: [EnvConfigModule],
  controllers: [AppController, CoursesController],
  providers: [AppService, CoursesService],
})
export class AppModule {}
