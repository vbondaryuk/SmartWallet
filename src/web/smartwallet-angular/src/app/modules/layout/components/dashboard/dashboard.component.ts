import {Component, OnInit, ViewChild} from '@angular/core';
import {TabsetComponent} from 'ngx-bootstrap';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.sass']
})
export class DashboardComponent implements OnInit {
  @ViewChild('tasksTab', { static: false }) taskTabs: TabsetComponent;
  private selectedTaskTabIndex = 0;

  constructor() { }

  ngOnInit() {
  }

  selectTaskTab(tabId: number) {
    this.taskTabs.tabs[tabId].active = true;
    this.selectedTaskTabIndex = tabId;
  }
}
