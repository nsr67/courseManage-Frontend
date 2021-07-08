import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Course } from '../models/course';
import { Participants } from '../models/participants';

@Injectable({
  providedIn: 'root'
})
export class CourseServiceService {

  constructor(private http: HttpClient) { }

  public URL='http://localhost:8081/course';

  //funtion to get Courses from course_entiyt table
  getCourses(){
    return this.http.get<Course[]>(this.URL);
  }

  //function to get course details by Id
  getCourseId(id:number){
    return this.http.get<Course>(this.URL+"/"+id);
  }

  //function to delete course from course_entity table
  deleteCourse(course:Course){
    return this.http.delete<Course>(this.URL+"/deletecourse/"+course.id);
  }

  //function to update course in course_entity table
  updateCourse(course:Course){
    return this.http.put<Course>(this.URL+"/updatecourse/"+course.id,course);
  }

  //function to create a new course in course_entity table
  createCourse(course: Course) {
    console.log("This is course skill"+ course.skill);
    console.log("This is course creator"+ course.creator);
    console.log("Course structure"+ course);

    // return this.http.post(this.URL+"/save",course);

    return this.http.post(`${this.URL}/save`, course);
  }

  //function to send mail to user
  sendMail(participants: Participants){
    return this.http.post(`${this.URL}/email`,participants);
  }

}
