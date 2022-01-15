import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EndingPageRoutingModule } from './ending-routing.module';

import { EndingPage } from './ending.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    EndingPageRoutingModule
  ],
  declarations: [EndingPage]
})
export class EndingPageModule {}
