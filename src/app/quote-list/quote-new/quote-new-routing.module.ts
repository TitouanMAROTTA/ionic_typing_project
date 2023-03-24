import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { QuoteNewPage } from './quote-new.page';

const routes: Routes = [
  {
    path: '',
    component: QuoteNewPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class QuoteNewPageRoutingModule {}
