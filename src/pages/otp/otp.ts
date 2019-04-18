import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { HomePage } from '../home/home';
import { SignUpPage } from '../sign-up/sign-up';


@IonicPage()
@Component({
  selector: 'page-otp',
  templateUrl: 'otp.html',
})
export class OtpPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  gtOTP(){
    // this.navCtrl.setRoot(HomePage)
    this.navCtrl.push(SignUpPage);
  }
}
