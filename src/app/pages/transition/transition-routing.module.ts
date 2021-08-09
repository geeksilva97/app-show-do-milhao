import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TransitionPage } from './transition.page';

const routes: Routes = [
  {
    path: '',
    component: TransitionPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TransitionPageRoutingModule {}
