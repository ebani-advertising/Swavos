import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { OtpPage } from '../otp/otp';



@IonicPage()
@Component({
  selector: 'page-phone-number',
  templateUrl: 'phone-number.html',
})
export class PhoneNumberPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  gtOTP(){
    this.navCtrl.push(OtpPage);
  }

}
