import { Component } from '@angular/core';
import { NavController } from '@ionic/angular';
import { AndroidFingerprintAuth } from '@ionic-native/android-fingerprint-auth/ngx';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor(private navCtrl: NavController, private androidFingerPrintAuth: AndroidFingerprintAuth) {}

  async authenticate() {

    let result = await this.androidFingerPrintAuth.isAvailable();

    if(result.isAvailable) {
      this.navCtrl.navigateForward('/dashboard');
    } else {
      alert('Your device has not fingerprint sensor.');
    }

  }

}
