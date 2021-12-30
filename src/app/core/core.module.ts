import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';
import { CoreRoutingModule } from './core-routing.module';
import { CoreComponent } from './core.component';
import { HomeComponent } from './home/home.component';
import { HomePage } from './pages/home/home';
import { CallPage } from './pages/call/call';
import { WebRTCProvider } from '../providers/webrtc';
import { StreamCreationComponent } from './stream-creation/stream-creation.component';
import { Clipboard } from '@awesome-cordova-plugins/clipboard/ngx';
import { SocialSharing } from '@awesome-cordova-plugins/social-sharing/ngx';


@NgModule({
  declarations: [
    CoreComponent,
    HomeComponent,
    HomePage,
    CallPage,
    StreamCreationComponent
  ],
  imports: [
    CommonModule,
    CoreRoutingModule,
    IonicModule,
    FormsModule
  ],
  providers: [
    WebRTCProvider,
    Clipboard,
    SocialSharing
  ]
})
export class CoreModule { }
