import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-configuration',
  templateUrl: './configuration.component.html',
  styleUrls: ['./configuration.component.sass']
})
export class ConfigurationComponent implements OnInit {
  periods: string[] = ['Month', 'Custom'];
  selectedPeriod: string;
  startDate: number;

  constructor() {
  }

  ngOnInit() {
  }

}
