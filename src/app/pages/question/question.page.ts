import { Component, OnInit } from '@angular/core';
import { QuestionsService } from 'src/app/services/questions.service';
import { Question } from 'src/app/dto/question.dto';
import { LoadingController } from '@ionic/angular';
import { Observable, of } from 'rxjs';

@Component({
  selector: 'app-question',
  templateUrl: './question.page.html',
  styleUrls: ['./question.page.scss'],
})
export class QuestionPage implements OnInit {

  question: Question;
  timer: number = 30;
  offset: number = 1000;

  mapLiteral = {
    1000: 'MIL REAIS',
    2000: 'DOIS MIL REAIS',
    1000000: 'UM MILHÃO DE REAIS'
  };

  metadata = {
    currentQuestion: 0,
    questionPrize: 1000,
    amount: 0,
  };

  constructor(
    private questionService: QuestionsService,
    private loadingCtrl: LoadingController
  ) { }

  ngOnInit() {
    this.question = this.questionService.questions[0];

    const intervalID = setInterval(() => {
      if(this.timer === 0) return clearInterval(intervalID);
      this.timer--;
    }, 1000);
  }

  async answerQuestion(answer: {text: string, right: boolean}) {


    if(answer.right) {

      if(this.metadata.currentQuestion === 15) {
        alert('Pergunta final');
        return;
      }

      const alertMessage = await this.loadingCtrl.create({
        message: 'Carregando...',
      });
      alertMessage.present();
      this.metadata.currentQuestion++;

      // acumulado é igual ao valor se acertar
      this.metadata.amount = this.metadata.questionPrize;

      // o valor de acerto muda (geralmente duas vezes)
      if(this.metadata.currentQuestion == 5) {
        this.metadata.questionPrize = 10000;
        this.offset = 10000;
      }else if(this.metadata.currentQuestion == 10) {
        this.metadata.questionPrize = 100000;
        this.offset = 100000;
      } else if(this.metadata.currentQuestion == 15) {
        this.metadata.questionPrize = 1000000;
        this.offset = 0;
      }
      else this.metadata.questionPrize += this.offset;


      this.question = this.questionService.questions[this.metadata.currentQuestion];
      alertMessage.dismiss();
      this.timer = 30;
      // setTimeout(() => {
      //   alertMessage.dismiss();
      //   this.timer = 30;
      // }, 2000);
    }
  }

}
