import { Body, Controller, Get, Param, Post } from '@nestjs/common'

@Controller('courses')
export class CoursesController {
  @Get()
  findAll() {
    return ['aqui é uma lista dos cursos']
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return `Curso com id: ${id}`
  }

  @Post()
  creat(@Body() body: { id: string; name: string }) {
    return body
  }
}
