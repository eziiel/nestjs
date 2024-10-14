import { Injectable } from '@nestjs/common'
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
    console.log(id)
    return this.courses.find((course) => course.id === id)
  }

  create(createCourseDTO: any) {
    this.courses.push(createCourseDTO)
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