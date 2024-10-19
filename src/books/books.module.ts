import { CoursesService } from '@/courses/courses.service'
import { Module } from '@nestjs/common'

@Module({
  providers: [CoursesService],
  exports: [],
})
export class BooksModule {}
