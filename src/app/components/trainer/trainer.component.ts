import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Course } from 'src/app/models/course';
import { CourseServiceService } from 'src/app/services/course-service.service';

@Component({
  selector: 'app-trainer',
  templateUrl: './trainer.component.html',
  styleUrls: ['./trainer.component.css']
})
export class TrainerComponent implements OnInit {

  courses: Course[];
  courseName: any;

  constructor(private router: Router,
    private service: CourseServiceService
    ) { }

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

  ok(){
    this.router.navigate(['/course']);
  }

}
