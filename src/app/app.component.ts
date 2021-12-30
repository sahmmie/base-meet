import { Component } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  public appPages = [
    { title: 'Home', url: '/core', icon: 'home', disabled: false },
    { title: 'Join Stream', url: '/core?join-stream', icon: 'videocam', disabled: false },
    { title: 'Settings', url: '/core/settings', icon: 'settings', disabled: true },
    { title: 'Quit', url: '/folder/Spam', icon: 'exit', disabled: false },
  ];
  constructor() {}
}
