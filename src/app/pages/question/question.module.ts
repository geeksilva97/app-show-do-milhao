import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { QuestionPageRoutingModule } from './question-routing.module';

import { QuestionPage } from './question.page';
import { EndingPageModule } from '../ending/ending.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    QuestionPageRoutingModule,
    EndingPageModule
  ],
  declarations: [QuestionPage]
})
export class QuestionPageModule {}
