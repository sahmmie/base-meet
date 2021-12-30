import { Injectable } from '@angular/core';
import * as Peer from 'peerjs';

@Injectable()
export class WebRTCProvider {
  stun = 'stun.l.google.com:19302';
  peer: Peer;
  mediaConnection: Peer.MediaConnection;
  myStream: MediaStream;
  myEl: HTMLMediaElement;
  partnerEl: HTMLMediaElement;

  stunServer: RTCIceServer = {
    urls: 'stun:' + this.stun,
  };
  options: Peer.PeerJSOption;

  constructor() {
    this.options = {
      key: 'cd1ft79ro8g833di',
      debug: 3
    };
  }

  getMedia(myEl: HTMLMediaElement) {
    navigator.getUserMedia({ audio: true, video: true }, (stream) => {
      this.myStream = stream;
      this.myEl = myEl;
      this.myEl.srcObject = this.myStream;
    }, (error) => {
      console.error('[getMedia] cannot get user media');
    });
  }

  init(userId: string, myEl: HTMLMediaElement, partnerEl: HTMLMediaElement) {
    this.getMedia(myEl);
    this.createPeer(userId);
  }

  createPeer(userId: string) {
    this.peer = new Peer(userId, this.options);
    this.peer.on('open', () => {
      this.wait();
    });
  }

  call(partnerId: string) {
    console.log(partnerId);
    this.mediaConnection = this.peer.call(partnerId, this.myStream);
  }

  wait() {
    this.peer.on('call', (call) => {
      call.on('stream', (stream) => {
        this.partnerEl.srcObject = (stream);
      });
    });
  }
}
