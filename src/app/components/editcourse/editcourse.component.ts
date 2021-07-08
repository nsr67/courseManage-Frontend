import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Course } from 'src/app/models/course';
import { Creator } from 'src/app/models/creator';
import { Skill } from 'src/app/models/skill';
import { CourseServiceService } from 'src/app/services/course-service.service';

@Component({
  selector: 'app-editcourse',
  templateUrl: './editcourse.component.html',
  styleUrls: ['./editcourse.component.css']
})
export class EditcourseComponent implements OnInit {

  courses: Course=new Course();
  skill: String="";
  creator: String="";
  constructor(private router: Router,private service: CourseServiceService,private route: ActivatedRoute){}

  ngOnInit(): void {
    this.courses.id= this.route.snapshot.params['id'];
    this.edit();
  }
  edit(){
    this.service.getCourseId(this.courses.id)
    .subscribe(data=>{
      this.courses=data;
    })
  }

  modify(course: Course){
    this.service.updateCourse(course)
    .subscribe(data=>{
      this.courses=data;
    })
    alert("Course edited successfully!!!!");
    this.router.navigate(["course"]);
  }
  addSkills(){
    this.courses.skill.push(new Skill(0,this.skill));
    alert("Skill: "+this.skill+" added successfully");
    this.skill = "";
  }
  addCreators(){
    console.log("add creator works");
    this.courses.creator.push(new Creator(0,this.creator));
    alert("Creator: "+this.creator+" added successfully");
    this.creator = "";
  }

}
