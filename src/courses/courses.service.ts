import {
  HttpException,
  HttpStatus,
  Injectable,
  NotFoundException,
} from '@nestjs/common'
import { Course } from './courses.entity'
import { CreateCourseDTO } from './dto/create-course.dto'
import { UpdateCourseDTO } from './dto/update-course.dto'

@Injectable()
export class CoursesService {
  private courses = [
    {
      id: 1,
      name: 'NestJs',
      description: 'Curso back end de NestJs',
      tags: ['nestjs', 'node', 'Typescript'],
    },
  ] as Course[]

  findAll() {
    return this.courses
  }

  findOne(id: number) {
    const exists = this.courses.find((course) => course.id === id)
    if (!exists) {
      return new NotFoundException(`Course id: ${id} - not found`)
    }

    return exists
  }

  create(createCourseDTO: CreateCourseDTO) {
    this.courses.push(createCourseDTO as any)

    return new HttpException('Created', HttpStatus.CREATED)
  }

  update(id: number, updateCourseDTO: UpdateCourseDTO) {
    const existCourse = this.findOne(id)

    if (existCourse) {
      const index = this.courses.findIndex((course) => course.id === id)
      this.courses[index] = {
        id: this.courses[index].id,
        ...updateCourseDTO,
      }
    }
  }

  remove(id: number) {
    const index = this.courses.findIndex((course) => course.id === id)
    if (index >= 0) {
      this.courses.splice(index, 1)
    }
  }
}
