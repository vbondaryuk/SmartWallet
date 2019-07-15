import {Injectable} from '@angular/core';
import {RouteInfo} from './route.info';

@Injectable({
  providedIn: 'root'
})
export class RouteService {
  public static readonly routes: RouteInfo[] = [
      {path: '/dashboard', title: 'Dashboard', icon: 'dashboard', class: ''},
      {path: '/user-profile', title: 'User Profile', icon: 'person', class: ''},
      {path: '/table-list', title: 'Table List', icon: 'content_paste', class: ''},
      {path: '/typography', title: 'Typography', icon: 'library_books', class: ''},
      {path: '/icons', title: 'Icons', icon: 'bubble_chart', class: ''},
      {path: '/maps', title: 'Maps', icon: 'location_on', class: ''},
      {path: '/notifications', title: 'Notifications', icon: 'notifications', class: ''},
      {path: '/upgrade', title: 'Upgrade to PRO', icon: 'unarchive', class: 'active-pro'},
    ];
}


