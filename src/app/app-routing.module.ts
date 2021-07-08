import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SocialAuthService, SocialLoginModule } from 'angularx-social-login';
import { CoursesComponent } from './components/courses/courses.component';
import { EditcourseComponent } from './components/editcourse/editcourse.component';
import { LoginComponent } from './components/login/login.component';
import { MailComponent } from './components/mail/mail.component';
import { NewcourseComponent } from './components/newcourse/newcourse.component';
import { SkillComponent } from './components/skill/skill.component';
import { TrainerComponent } from './components/trainer/trainer.component';
import { TrendsComponent } from './components/trends/trends.component';


const routes: Routes = [
  {path:'', component: LoginComponent },
  {path:'login', component: LoginComponent},
  {path:'course', component:CoursesComponent},
  {path:'skill', component: SkillComponent},
  {path:'trainer', component:TrainerComponent},
  {path:'newcourse', component:NewcourseComponent},
  {path:'mail', component:MailComponent},
  {path:'trends', component:TrendsComponent},
  {path:'updatecourse/:id', component:EditcourseComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
