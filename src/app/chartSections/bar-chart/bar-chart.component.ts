import { Component, OnInit } from '@angular/core';

const SAMPLE_DATA: any[] = [
  { data: [10, 20, 30, 40, 50,60,70], label: 'A1' },
  { data: [15, 25, 35, 45, 55,65,75], label: 'A2' }
];
const SAMPLE_LABELS: string[] = ['w1', 'w2', 'w3', 'w4', 'w5','w6','w7'];
@Component({
  selector: 'app-bar-chart',
  templateUrl: './bar-chart.component.html',
  styleUrls: ['./bar-chart.component.css']
})
export class BarChartComponent implements OnInit {
  constructor() {}
  public barChartData: any[]=SAMPLE_DATA;
  public barChartLabels: string[]=SAMPLE_LABELS;
  public barChartType = 'bar';
  public barChartLegend = true;
  public barChartOptions: any = {
    scaleShowVerticalLines: false,
    responsive: true
  }

  ngOnInit() { }

}
