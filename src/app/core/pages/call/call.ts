import { Component, ElementRef } from '@angular/core';
import { NavController } from '@ionic/angular';
import { WebRTCProvider } from '../../../providers/webrtc';

@Component({
  selector: 'app-call-home',
  templateUrl: 'call.html'
})
export class CallPage {
  userId: string;
  partnerId: string;
  myEl: HTMLMediaElement;
  partnerEl: HTMLMediaElement;

  constructor(
    public navCtrl: NavController,
    public webRTC: WebRTCProvider,
    public elRef: ElementRef
  ) {
    this.userId = 'samson';
  }

  ionViewDidLoad() {
    this.myEl = this.elRef.nativeElement.querySelector('#my-video');
    this.myEl = this.elRef.nativeElement.querySelector('#partner-video');
    this.webRTC.init(this.userId, this.myEl, this.partnerEl);
  }

  call() {
    this.webRTC.call(this.partnerId);
  }

}
