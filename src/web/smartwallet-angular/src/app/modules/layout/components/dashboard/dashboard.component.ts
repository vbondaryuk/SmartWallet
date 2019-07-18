import {Component, OnInit, ViewChild} from '@angular/core';
import {TabsetComponent} from 'ngx-bootstrap';
import { ChartDataSets, ChartOptions } from 'chart.js';
import { Color, BaseChartDirective, Label } from 'ng2-charts';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.sass']
})
export class DashboardComponent implements OnInit {
  @ViewChild('tasksTab', { static: false }) taskTabs: TabsetComponent;
  selectedTaskTabIndex = 0;

  @ViewChild(BaseChartDirective, { static: true }) chart: BaseChartDirective;
  public lineChartData: ChartDataSets[] = [
    { data: [65, 59, 80, 81, 56, 55, 40] }
  ];

  public lineChartType = 'line';
  public lineChartLabels: Label[] = ['M', 'T', 'W', 'T', 'F', 'S', 'S'];
  public lineChartOptions: (ChartOptions & { annotation: any }) = {
    responsive: true,
    scales: {
      xAxes: [{
        gridLines: {
          color: 'rgba(255,255,255,.2)',
          borderDash: [10, 3]
        },
        ticks: {
          fontColor: 'rgba(255,255,255,.7)',
        }
      }],
      yAxes: [{
        gridLines: {
          color: 'rgba(255,255,255,.2)',
          borderDash: [10, 3]
        },
        ticks: {
          fontColor: 'rgba(255,255,255,.7)',
        }
      }],
    },
    annotation: {},
  };
  public lineChartColors: Color[] = [
    {
      backgroundColor: 'rgba(0,0,0,0)',
      borderColor: '#fff',
      pointHoverBackgroundColor: '#fff',
      pointHoverBorderColor: 'rgba(148,159,177,0.8)',
      pointBackgroundColor: '#fff',
      pointRadius: 5

    }
  ];
  constructor() { }

  ngOnInit() {
  }

  selectTaskTab(tabId: number) {
    this.taskTabs.tabs[tabId].active = true;
    this.selectedTaskTabIndex = tabId;
  }
}
