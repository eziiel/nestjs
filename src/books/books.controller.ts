import { CoursesService } from '@/courses/courses.service'
import { Controller, Get } from '@nestjs/common'

@Controller('books')
export class BooksController {
  constructor(private readonly bookService: CoursesService) {}
  @Get()
  findAll() {
    return this.bookService.findAll()
  }
}
