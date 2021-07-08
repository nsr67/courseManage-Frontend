import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Course } from 'src/app/models/course';
import { Creator } from 'src/app/models/creator';
import { Skill } from 'src/app/models/skill';

import { CourseServiceService } from 'src/app/services/course-service.service';

@Component({
  selector: 'app-newcourse',
  templateUrl: './newcourse.component.html',
  styleUrls: ['./newcourse.component.css']
})
export class NewcourseComponent implements OnInit {

  course: Course=new Course();
  skill: String="";
  creator: String="";
  skill_size: number=0;
  creator_size: number=0;
  constructor( private service: CourseServiceService,
               private router: Router) { }

  ngOnInit(): void {
  }


  save(){
    if(this.skill_size>0 && this.creator_size>0)
    {
    this.service.createCourse(this.course)
    .subscribe(data=>{
      alert("New course added successfully.");
      this.router.navigate(["/course"]);
    })
    }
    else{
      alert("Please add atleast one skill and creator.");
    }
  }

  addSkills(){
    console.log("add skill works");
    this.course.skill.push(new Skill(0,this.skill));
    this.skill_size++;
    alert("Skill: "+this.skill+" added successfully");
    console.log(this.course.skill);
    this.skill = "";
  }
  addCreators(){
    console.log("add creator works");
    this.course.creator.push(new Creator(0,this.creator));
    this.creator_size++;
    alert("Creator: "+this.creator+" added successfully");
    console.log(this.course.creator);
    this.creator = "";
  }

}
