import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavigationComponent } from './components/navigation/navigation.component';
import { TrainerComponent } from './components/trainer/trainer.component';
import { TrendsComponent } from './components/trends/trends.component';
import { CoursesComponent } from './components/courses/courses.component';
import { HttpClientModule } from '@angular/common/http';
import { Ng2SearchPipeModule} from 'ng2-search-filter'
import { FormsModule } from '@angular/forms';
import { MailComponent } from './components/mail/mail.component';
import { NewcourseComponent } from './components/newcourse/newcourse.component';
import { EditcourseComponent } from './components/editcourse/editcourse.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatDialogModule } from '@angular/material/dialog';
import { PopupModule } from '@progress/kendo-angular-popup';
import { SkillComponent } from './components/skill/skill.component';
import { NgxChartsModule } from '@swimlane/ngx-charts';
import { LoginComponent } from './components/login/login.component';
import { GoogleLoginProvider, SocialAuthServiceConfig, SocialLoginModule } from 'angularx-social-login';


@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    TrainerComponent,
    TrendsComponent,
    CoursesComponent,
    MailComponent,
    NewcourseComponent,
    EditcourseComponent,
    SkillComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    Ng2SearchPipeModule,
    FormsModule,
    BrowserAnimationsModule,
    MatDialogModule,
    PopupModule,
    NgxChartsModule,
    SocialLoginModule
  ],
  providers: [{
    provide: 'SocialAuthServiceConfig',
    useValue: {
      autoLogin: false,
      providers: [
        {
          id: GoogleLoginProvider.PROVIDER_ID,
          provider: new GoogleLoginProvider(
            '986895899271-eea7epn932mdagop4eo9hoibvja1d93k.apps.googleusercontent.com' // add web app client id
          )
        }
      ]
    } as SocialAuthServiceConfig
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
