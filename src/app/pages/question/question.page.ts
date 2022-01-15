import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { PrizeInfo } from 'src/app/models/prize-info';
import { Question, QuestionAnswer } from 'src/app/models/question';
import { QuestionService } from 'src/app/question.service';
import { environment } from 'src/environments/environment';
import { EndingPage } from '../ending/ending.page';

@Component({
  selector: 'app-question',
  templateUrl: './question.page.html',
  styleUrls: ['./question.page.scss'],
})
export class QuestionPage implements OnInit {

  curQuesion: Question;
  prizeInfo: PrizeInfo;
  timeLeft: number;
  // TODO: know why NodeJS is uses in Ionic
  private intervalID: any;
  
  constructor(
    private questionService: QuestionService,
    private modalCtrl: ModalController
  ){}

  private loadQuestion() {
    this.curQuesion = this.questionService.nextQuestion();
    this.prizeInfo = this.questionService.getPrizeInfo();
  }

  async finish(title: string, message: string, endingType: string) {
    const modal = await this.modalCtrl.create({
      component: EndingPage,
      componentProps: { title, message, endingType },
      backdropDismiss: false,
      swipeToClose: false,
      keyboardClose: false
    });

    modal.present();
  }

  ngOnInit(): void {
    this.timeLeft = environment.timePerQuestion;
    this.loadQuestion();
    this.intervalID = setInterval(() => {
      if(--this.timeLeft === 0) {
        clearInterval(this.intervalID);
        this.finish('Fim de jogo', 'Seu tempo acabou!', 'wrongAnswer');
        return;
      }
    }, 1000);
  }

  giveUp() {
    this.finish('Fim de jogo', 'Você parou!', 'quit');
    clearInterval(this.intervalID);
  }

  doAnswer(answer: QuestionAnswer) {
    if(answer.isRight) {
      this.timeLeft = environment.timePerQuestion;
      this.loadQuestion();
    } else {
      this.finish('Fim de jogo', 'Você errou!', 'wrongAnswer');
      clearInterval(this.intervalID);
    }
  }

}
