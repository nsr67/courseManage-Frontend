import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { setupTestingRouter } from '@angular/router/testing';
import { Course } from 'src/app/models/course';
import { Creator } from 'src/app/models/creator';
import { Participants } from 'src/app/models/participants';
import { Skill } from 'src/app/models/skill';
import { CourseServiceService } from 'src/app/services/course-service.service';

@Component({
  selector: 'app-mail',
  templateUrl: './mail.component.html',
  styleUrls: ['./mail.component.css']
})
export class MailComponent implements OnInit {

  courses!: Course[];
  courseName!: any;
  courseDetails: Course[];
  participants: Participants;
  mail_body:String;

  constructor(private service: CourseServiceService,
    private router: Router) { }

  ngOnInit(): void {
    this.service.getCourses()
    .subscribe(data=>{
      this.courses=data;
    });
  }

  Search(){
    if(this.courseName==""){
      this.ngOnInit();
    }else{
      this.courses= this.courses.filter(res=>{
        return res.courseName.toLocaleLowerCase().match(this.courseName.toLocaleLowerCase());
      })
    }
  }
  
  setUpMail(course: Course){
    this.mail_body= "Course details of: "+ course.courseName+"\nCourse description: "+course.description+
                    "\nPre-Requisite for course: "+course.prerequesite+"\nLast Updated: "+course.lastupdated+
                    "\nLocation: "+course.location+"\nFeedback: "+course.feedback+"\nSkills you will achieve is/are: "+
                    JSON.stringify(course.skill)+"\nCreator of the course: "+JSON.stringify(course.creator)+"\n\nThanks & Regards\nTeam Accolite Digital";
    this.participants= new Participants(course.courseName,this.mail_body);
  }

  MailMe(course: Course){
    this.setUpMail(course);
    this.service.sendMail(this.participants)
    .subscribe(data=>{
    })
    alert("Email Send Successfully!!!");
    this.router.navigate(["/mail"])
  }

}
