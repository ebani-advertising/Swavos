import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { PhoneNumberPage } from '../phone-number/phone-number';
import { KnowledgePage } from '../knowledge/knowledge';



@IonicPage()
@Component({
  selector: 'page-splash',
  templateUrl: 'splash.html',
})
export class SplashPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  gtLogin(){
    this.navCtrl.push(PhoneNumberPage)
  }
  Knowledge(){
    this.navCtrl.push(KnowledgePage)
  }
}
