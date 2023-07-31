import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Student } from './Model/Student';

@Injectable({
  providedIn: 'root',
})
export class ApiServiceService {
  baseUrl: string = 'http://localhost:8080/student';

  constructor(private httpClient: HttpClient) {}

  createStudent(student: Student) {
    return this.httpClient.post<Student>(`${this.baseUrl}`, student);
  }

  allStudent() {
    return this.httpClient.get<Student[]>(`${this.baseUrl}`);
  }

  getStudentById(id: number) {
    return this.httpClient.get<Student>(`${this.baseUrl}/${id}`);
  }

  updateStudent(student: Student, id: number) {
    return this.httpClient.put<Student>(`${this.baseUrl}/${id}`, student);
  }

  deleteStudent(id: any) {
    return this.httpClient.delete(`${this.baseUrl}/${id}`);
  }
}
