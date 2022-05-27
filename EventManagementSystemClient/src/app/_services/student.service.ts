import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Student } from '../_models/student';

@Injectable({
  providedIn: 'root'
})
export class StudentService {
  baseurl="http://localhost:8080/Students/";

  getAllStudents()
  {
    return this.http.get<Student[]>(this.baseurl)
  }
  addStudent(std:Student)
  {
    return this.http.post<Student>(this.baseurl,std)
  }
  getStudentById(id:number)
  {
    return this.http.get<Student>(this.baseurl+id);
  }
  updateStudent(std:Student)
  {
    //return this.http.put<Student>(this.baseurl+std._id, std);
  }
  deleteStudent(id:number)
  {
    return this.http.delete(this.baseurl+id);
  }

  constructor(public http:HttpClient) { }
}