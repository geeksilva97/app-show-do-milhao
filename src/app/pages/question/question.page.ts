import { Component, OnInit } from '@angular/core';
import { PrizeInfo } from 'src/app/models/prize-info';
import { Question, QuestionAnswer } from 'src/app/models/question';
import { QuestionService } from 'src/app/question.service';

@Component({
  selector: 'app-question',
  templateUrl: './question.page.html',
  styleUrls: ['./question.page.scss'],
})
export class QuestionPage implements OnInit {

  curQuesion: Question;
  prizeInfo: PrizeInfo;
  
  constructor(
    private questionService: QuestionService
  ){}

  private loadQuestion() {
    this.curQuesion = this.questionService.nextQuestion();
    this.prizeInfo = this.questionService.getPrizeInfo();
  }

  ngOnInit(): void {
    this.loadQuestion();
  }


  doAnswer(answer: QuestionAnswer) {
    if(answer.isRight) {
      this.loadQuestion();
    }
  }

}
