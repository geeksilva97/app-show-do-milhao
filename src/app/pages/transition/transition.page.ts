import { Component, Input, OnInit } from '@angular/core';
import { ModalController, Platform } from '@ionic/angular';
import { PrizeInfo } from 'src/app/models/prize-info';

@Component({
  selector: 'app-transition',
  templateUrl: './transition.page.html',
  styleUrls: ['./transition.page.scss'],
})
export class TransitionPage implements OnInit {

  prizeDescription = {
    '2000': '2 MIL REAIS',
    '3000': '3 MIL REAIS',
    '4000': '4 MIL REAIS',
    '5000': '5 MIL REAIS',
    '10000': '10 MIL REAIS',
    '20000': '20 MIL REAIS',
    '30000': '30 MIL REAIS',
    '40000': '40 MIL REAIS',
    '50000': '50 MIL REAIS',
    '100000': '100 MIL REAIS',
    '200000': '200 MIL REAIS',
    '300000': '300 MIL REAIS',
    '400000': '400 MIL REAIS',
    '500000': '500 MIL REAIS',
    '1000000': '1 MILHÃO DE REAIS',
  };

  @Input()
  prizeInfo: PrizeInfo;

  constructor(
    private modalCtrl: ModalController,
    private platform: Platform
  ) { }

  get nextPrizeDescription() {
    if(!this.prizeInfo) return '';
    return this.prizeDescription[this.prizeInfo.correctAnswer] || this.prizeInfo.correctAnswer;
  }

  ngOnInit() {
    // this.platform.backButton.subscribe(() => {
    //   console.log('back button!!');
    // });
  }

  dismiss() {
    this.modalCtrl.dismiss();
  }

}
