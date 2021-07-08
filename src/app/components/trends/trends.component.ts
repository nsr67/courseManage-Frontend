import { Component, OnInit } from '@angular/core';
import { courses } from 'src/app/models/data';
import { location } from 'src/app/models/data'
import { NgxChartsModule } from '@swimlane/ngx-charts'; 

@Component({
  selector: 'app-trends',
  templateUrl: './trends.component.html',
  styleUrls: ['./trends.component.css']
})
export class TrendsComponent implements OnInit {

  courses: any[];
  location: any[];

  constructor() {
    Object.assign(this, { courses }),
    Object.assign(this, { location})
  }

  ngOnInit(): void {
  }

  // options
  showXAxis = true;
  showYAxis = true;
  gradient = false;
  showLegend = false;
  showXAxisLabel = true;
  xAxisLabel = 'Courses';
  showYAxisLabel = true;
  yAxisLabel = 'No of locations';

  colorScheme = {
    domain: ['#bccbeb', '#f2d061', '#333436', '#6172f2', '#f27261']
  };
  
  //Pie-chart

  // options
  gradients: boolean = true;
  showlegend: boolean = true;
  showlabels: boolean = false;
  isdoughnut: boolean = false;
  // legendposition: String = 'below';

  colorscheme = {
    domain: ['#bccbeb', '#f2d061', '#333436', '#6172f2', '#f27261']
  };

}
