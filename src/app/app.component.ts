import { Component } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  public appPages = [
    { title: 'Inbox', url: '/folder/Inbox', icon: 'mail', active: false },
    { title: 'Outbox', url: '/folder/Outbox', icon: 'paper-plane', active: false },
    { title: 'Favorites', url: '/folder/Favorites', icon: 'heart', active: false },
    { title: 'Archived', url: '/folder/Archived', icon: 'archive', active: false },
    { title: 'Trash', url: '/folder/Trash', icon: 'trash', active: false },
    { title: 'Spam', url: '/folder/Spam', icon: 'warning', active: false },
  ];
  constructor() {}
}
