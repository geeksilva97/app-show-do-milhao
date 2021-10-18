import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { PrizeInfo } from 'src/app/models/prize-info';
import { Question, QuestionAnswer } from 'src/app/models/question';
import { QuestionService } from 'src/app/question.service';
import { TransitionPage } from '../transition/transition.page';

@Component({
  selector: 'app-question',
  templateUrl: './question.page.html',
  styleUrls: ['./question.page.scss'],
})
export class QuestionPage implements OnInit {

  curQuesion: Question;
  prizeInfo: PrizeInfo;
  
  constructor(
    private questionService: QuestionService,
    private modalCtrl: ModalController
  ){}

  private loadQuestion() {
    this.curQuesion = this.questionService.nextQuestion();
    this.prizeInfo = this.questionService.getPrizeInfo();
  }

  private async showTransition(time: number = 2000) {
    const transitionModal = await this.modalCtrl.create({
      component: TransitionPage,
      componentProps: {
        prizeInfo: this.prizeInfo
      },
      backdropDismiss: false,
      keyboardClose: false,
      swipeToClose: false
    });

    await transitionModal.present();
    if (time) setTimeout(() => transitionModal.dismiss(), time);
    await transitionModal.onDidDismiss();
  }

  ngOnInit(): void {
    this.loadQuestion();
  }


  async doAnswer(answer: QuestionAnswer) {
    if(answer.isRight) {
      this.loadQuestion();
      this.showTransition();
      console.log('transition finished');
    }
  }

}
