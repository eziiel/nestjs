import {
  HttpException,
  HttpStatus,
  Injectable,
  NotFoundException,
} from '@nestjs/common'
import { Course } from './courses.entity'

@Injectable()
export class CoursesService {
  private courses: Course[] = [
    {
      id: 1,
      name: 'NestJs',
      description: 'Curso back end de NestJs',
      tags: ['nestjs', 'node', 'Typescript'],
    },
  ]

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

  create(createCourseDTO: any) {
    this.courses.push(createCourseDTO)

    return new HttpException('Created', HttpStatus.CREATED)
  }

  update(id: number, updateCourseDTO: any) {
    const existCourse = this.findOne(id)

    if (existCourse) {
      const index = this.courses.findIndex((course) => course.id === id)
      this.courses[index] = {
        id,
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
