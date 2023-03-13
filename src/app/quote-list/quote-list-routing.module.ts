import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { QuoteListPage } from './quote-list.page';

const routes: Routes = [
  {
    path: '',
    component: QuoteListPage
  },
  {
    path: 'quote-new',
    loadChildren: () => import('./quote-new/quote-new.module').then( m => m.QuoteNewPageModule)
  },
  {
    path: 'quote',
    loadChildren: () => import('./quote/quote.module').then( m => m.QuotePageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class QuoteListPageRoutingModule {}
