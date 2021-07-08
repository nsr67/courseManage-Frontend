import { Component, OnInit } from '@angular/core';
import { CourseServiceService } from 'src/app/services/course-service.service';
import { Course } from 'src/app/models/course';
import { Router } from '@angular/router';


@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.css']
})
export class CoursesComponent implements OnInit {

  courses: Course[];
  courseName: any;
  public showSkill=false;
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
  edit(id: number){
    this.router.navigate(['updatecourse',id]);
  }
  delete(courses: Course){
    this.service.deleteCourse(courses)
    .subscribe(data=>{
      this.courses=this.courses.filter(c=>c!==courses);
    })
    alert("Course is deleted");
    window.location.reload();
  }

  showSkills(): void{
    this.router.navigate(['/skill']);
  }

  showTrainers(){
      this.router.navigate(['/trainer']);
  }

}
