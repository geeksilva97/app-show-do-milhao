import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EndingPage } from './ending.page';

const routes: Routes = [
  {
    path: '',
    component: EndingPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EndingPageRoutingModule {}
