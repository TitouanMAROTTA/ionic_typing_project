import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TabPage } from './tab.page';

const routes: Routes = [
  {
    path: 'tab',
    component: TabPage,
    children: [
      {
        path: 'quotes',
        loadChildren: () => import('../quote-list/quote-list.module').then( m => m.QuoteListPageModule)
      },
      {
        path: 'home',
        loadChildren: () => import('../home/home.module').then( m => m.HomePageModule)
      },
      {
        path: 'write',
        loadChildren: () => import('../write/write.module').then( m => m.WritePageModule)
      },
      {
        path: 'quote-new',
        loadChildren: () => import('../quote-list/quote-new/quote-new.module').then( m => m.QuoteNewPageModule)
      },
    ]
  },
  {
    path:'',
    redirectTo:'/tab/home',
    pathMatch:'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TabPageRoutingModule {}
