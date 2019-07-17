import {Component, OnInit} from '@angular/core';
import {BreakpointObserver} from '@angular/cdk/layout';
import {RouteService} from '../../services/route.service';
import {RouteInfo} from '../../services/route.info';



@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.sass']
})
export class SidebarComponent implements OnInit {
  menuItems: RouteInfo[];
  isMobileMenu: boolean;

  constructor(private breakpointObserver: BreakpointObserver) {
  }

  ngOnInit() {
    this.menuItems = RouteService.routes.filter(menuItem => menuItem);
    this.isMobileMenu = this.breakpointObserver.isMatched('(max-width: 991px)');
    this.breakpointObserver.observe([
      '(max-width: 991px)'
    ]).subscribe(result => {
      this.isMobileMenu = result.matches;
    });
  }
}
