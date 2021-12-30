import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';
import { Clipboard } from '@awesome-cordova-plugins/clipboard/ngx';
import { SocialSharing } from '@awesome-cordova-plugins/social-sharing/ngx';

@Component({
  selector: 'app-stream-creation',
  templateUrl: './stream-creation.component.html',
  styleUrls: ['./stream-creation.component.scss']
})
export class StreamCreationComponent implements OnInit {
  micOff = false;
  meetingLink = 'base.meet/pav-azdu-qra';
  meetingCode = 'pav-azdu-qra';

  constructor(
    private alertController: AlertController,
    private clipboard: Clipboard,
    private socialSharing: SocialSharing
  ) { }

  ngOnInit(): void {
  }

  copyLink() {
    this.clipboard.copy(this.meetingLink).then(() => {
      this.presentAlert('Copied', 'Meeting link copied to clipboard');
    }, (err) => {
      this.presentAlert('Error', 'Error copying meeting link to clipboard');
      console.log('Error: ', err);
    });
  }

  async presentAlert(header, message) {
    const alert = await this.alertController.create({
      cssClass: 'my-custom-class',
      header,
      message,
      buttons: ['Okay'],
    });

    await alert.present();

    const { role } = await alert.onDidDismiss();
  }

  shareMeetingLink() {

    // Check if sharing via email is supported
    this.socialSharing.canShareViaEmail().then(() => {
      // Sharing via email is possible
    }).catch(() => {
      // Sharing via email is not possible
    });

    // Share via email
    this.socialSharing.shareViaEmail('Body', 'Subject', ['recipient@example.org']).then(() => {
      // Success!
    }).catch(() => {
      // Error!
    });
  }

}
