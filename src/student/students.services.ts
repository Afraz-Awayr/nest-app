import { Injectable } from '@nestjs/common';
import Student from 'models/students';

@Injectable()
export class StudentsService {
  async create(studentData: Student): Promise<Student> {
    return Student.create(studentData);
  }

  async findAll(): Promise<Student[]> {
    return Student.findAll();
  }

  async findOne(id: number): Promise<Student> {
    return Student.findOne({ where: { id } });
  }

  async update(id: number, studentData: Partial<Student>): Promise<string> {
    const studentDetails = await Student.findOne({ where: { id } });
    if (studentDetails) {
      const updated = await Student.update(studentData, { where: { id } });
      return `student details updated ${updated}`;
    }
    return null;
    // return Student.update(studentData, { where: { id } });
  }

  async delete(id: number): Promise<string> {
    const delStudent = await Student.destroy({ where: { id } });
    return `student deleted: ${delStudent}`;
  }
}
