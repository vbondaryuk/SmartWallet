import {Component, ElementRef, OnInit} from '@angular/core';
import {Location} from '@angular/common';
import {Router} from '@angular/router';
import {RouteService} from '../../services/route.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.sass']
})
export class NavbarComponent implements OnInit {
  show: boolean;
  private toggleButton: any;
  private sidebarVisible = false;

  constructor(private location: Location, private element: ElementRef, private router: Router) {
  }

  ngOnInit() {
    const navbar: HTMLElement = this.element.nativeElement;
    this.toggleButton = navbar.getElementsByClassName('navbar-toggler')[0];
    this.router.events.subscribe(() => {
      this.sidebarClose();
    });
  }

  private sidebarToggle() {
    if (this.sidebarVisible) {
      this.sidebarClose();
    } else {
      this.sidebarOpen();
    }
  }

  private getTitle() {
    const title = this.location.prepareExternalUrl(this.location.path());
    const routeInfo = RouteService.routes.find(x => x.path === title);
    if (routeInfo) {
      return routeInfo.title;
    }

    return 'Dashboard';
  }

  private sidebarOpen() {
    const body = document.getElementsByTagName('body')[0];
    setTimeout(() => {
      this.toggleButton.classList.add('toggled');
    }, 500);

    body.classList.add('nav-open');

    this.sidebarVisible = true;
  }

  private sidebarClose() {
    // TODO maybe hide by if condition if(!sidebarVisible)
    this.toggleButton.classList.remove('toggled');
    this.sidebarVisible = false;

    const body = document.getElementsByTagName('body')[0];
    body.classList.remove('nav-open');
  }
}
