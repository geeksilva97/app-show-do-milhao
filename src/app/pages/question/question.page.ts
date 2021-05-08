import { Component, OnInit } from '@angular/core';
import { LoadingController } from '@ionic/angular';
import { Question, QuestionAnswer } from 'src/app/models/question';
import { QuestionService } from 'src/app/question.service';

@Component({
  selector: 'app-question',
  templateUrl: './question.page.html',
  styleUrls: ['./question.page.scss'],
})
export class QuestionPage implements OnInit {
  curQuesion: Question;
  prizeInfo: { wrongAnswer: number, correctAnswer: number, quit: number };


  constructor(
    private questionService: QuestionService
  ) { }

  private loadQuestion() {
    this.curQuesion = this.questionService.nextQuestion();
    this.prizeInfo = this.questionService.getPrizeInfo();
  }

  ngOnInit(): void {
    this.loadQuestion()
  }


  doAnswer(answer: QuestionAnswer) {
    if (answer.isRight) {
      if (this.questionService.questionNumber < 16) {
        this.loadQuestion()
      }
    }
  }

}
