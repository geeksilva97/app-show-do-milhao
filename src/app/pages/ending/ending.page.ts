import { Component, Input, OnInit } from '@angular/core';
import { QuestionService } from 'src/app/question.service';

@Component({
  selector: 'app-ending',
  templateUrl: './ending.page.html',
  styleUrls: ['./ending.page.scss'],
})
export class EndingPage implements OnInit {
  @Input()
  title: string;

  @Input()
  message: string;

  @Input()
  endingType: string; // quit, wrongAnser, win (ainda vai ser tratado)

  constructor(
    private questionService: QuestionService,
  ) { }

  get prizeWon() {
    const prizeInfo = this.questionService.getPrizeInfo();
    return prizeInfo[this.endingType];
  }

  ngOnInit(): void {
    console.log(this.questionService.getPrizeInfo());
  }
}
