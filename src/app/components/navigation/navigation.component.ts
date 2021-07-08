import { Component, OnInit } from '@angular/core';
import { Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css']
})
export class NavigationComponent implements OnInit {

  public user: any;

  constructor(private router: Router) { }

  ngOnInit(): void{
    const storage = localStorage.getItem('google_auth');

    if (storage) {
      this.user = JSON.parse(storage);
    } else {
      this.signOut();
    }
  }
  goToCourse(): any{
    this.router.navigate(['/course']);
  }
  goToTrainer(): any{
    this.router.navigate(['/trainer']);
  }
  goToTrends(){
    this.router.navigate(['/trends']);
  }
  goToMailService(){
    this.router.navigate(['/mail']);
  }
  goToNewCourse(){
    this.router.navigate(['/newcourse']);
  }
  signOut(): void {
    localStorage.removeItem('google_auth');
    this.router.navigate(['/login']);
  }
}
