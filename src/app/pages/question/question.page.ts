import { Component, OnInit } from '@angular/core';
import { LoadingController } from '@ionic/angular';
import { Question, QuestionAnswer } from 'src/app/models/question';

@Component({
  selector: 'app-question',
  templateUrl: './question.page.html',
  styleUrls: ['./question.page.scss'],
})
export class QuestionPage implements OnInit {

  questions: Question[] = [

    {
      title: 'Pergunta 1',
      answers: [
        {description: 'Resposta 1 P1', isRight: false},
        {description: 'Resposta 2 P1', isRight: true},
        {description: 'Resposta 3 P1', isRight: false},
        {description: 'Resposta 4 P1', isRight: false},
      ]
    },

    {
      title: 'Pergunta 2',
      answers: [
        {description: 'Resposta 1 P2', isRight: true},
        {description: 'Resposta 2 P2', isRight: false},
        {description: 'Resposta 3 P2', isRight: false},
        {description: 'Resposta 4 P2', isRight: false},
      ]
    },

    {
      title: 'Pergunta 3',
      answers: [
        {description: 'Resposta 1 P3', isRight: false},
        {description: 'Resposta 2 P3', isRight: false},
        {description: 'Resposta 3 P3', isRight: false},
        {description: 'Resposta 4 P3', isRight: true},
      ]
    }

  ];

  curQuesion: Question;
  questionIndex: number = 0;
  

  ngOnInit(): void {
    this.curQuesion = this.questions[this.questionIndex];
  }


  doAnswer(answer: QuestionAnswer) {
    if(answer.isRight) {
      this.questionIndex++;
      this.curQuesion = this.questions[this.questionIndex];
    }
  }

}
