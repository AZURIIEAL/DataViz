import { Component } from '@angular/core';
import { ChartConfiguration } from 'chart.js';

@Component({
  selector: 'app-doughnut-chart',
  templateUrl: './doughnut-chart.component.html',
  styleUrls: ['./doughnut-chart.component.css']
})
export class DoughnutChartComponent {
  title = 'chart';

  // Doughnut
  public doughnutChartLabels: string[] = [ 'Download Sales', 'In-Store Sales'];
  public doughnutChartDatasets: ChartConfiguration<'doughnut'>['data']['datasets'] = [
      { data: [ 350, 450, 100 ], label: 'Series A' },
      { data: [ 50, 150, 120 ], label: 'Series B' },
      
    ];

  public doughnutChartOptions: ChartConfiguration<'doughnut'>['options'] = {
    responsive: false,
    borderColor:'#111'

    
  };

  constructor() {
  }

}