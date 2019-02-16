import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';

/**
 * Generated class for the RechargePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-recharge',
  templateUrl: 'recharge.html',
})
export class RechargePage {

  testCheckboxOpen: any;
  testCheckboxResult: any;

  constructor(public navCtrl: NavController, public navParams: NavParams,
    public alertCtrl: AlertController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad RechargePage');
  }

  openPop(){


    let alert = this.alertCtrl.create();
    alert.setTitle('Select your recharge amount');

    alert.addInput({
      type: 'checkbox',
      label: '10 BDT = € 0.21',
      value: '10',
      checked: true
    });

    alert.addInput({
      type: 'checkbox',
      label: '50 BDT = € 0.84',
      value: '50'
    });

    alert.addInput({
      type: 'checkbox',
      label: '100 BDT = € 1.68',
      value: '100'
    });

    alert.addInput({
      type: 'checkbox',
      label: '1000 BDT = € 15.54',
      value: '1000'
    });

    alert.addButton('Cancel');
    alert.addButton({
      text: 'Okay',
      handler: data => {
        console.log('Checkbox data:', data);
        this.testCheckboxOpen = false;
        this.testCheckboxResult = data;

        let anotherAlert = this.alertCtrl.create({
          title: 'Balance Alert',
          message: 'You have insufficient balance',
          buttons: ['OK']
        });

        anotherAlert.present();

        // let anotherAlert = this.alertCtrl.create({
        //   title: 'Not sufficient Balance',
        //   buttons: [{
        //     text: 'Cancel',
        //     role: 'cancel',
        //     handler: data => {
        //     }
        //   },
        //   {
        //     text: 'Ok',
        //     handler: data => {
        //   }]
        // });

        // anotherAlert.present();

      }
    });
    alert.present();
  }

}
