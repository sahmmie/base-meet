import { Component } from '@angular/core';
import { NavController } from '@ionic/angular';
import { CallPage } from '../call/call';

@Component({
  selector: 'app-page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  userId: string;

  constructor(public navCtrl: NavController) {

  }

  login() {
    this.navCtrl.navigateForward('/core/call');
  }
}
