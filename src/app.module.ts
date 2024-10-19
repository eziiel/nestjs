import { Module } from '@nestjs/common'
import { AppController } from './app.controller'
import { AppService } from './app.service'
import { EnvConfigModule } from './shared/infrastructure/env-config/env-config.module'
import { CoursesModule } from './courses/courses.module'
import { BooksController } from './books/books.controller'
import { BooksModule } from './books/books.module'

@Module({
  imports: [EnvConfigModule, CoursesModule, BooksModule],
  controllers: [AppController, BooksController],
  providers: [AppService],
})
export class AppModule {}
