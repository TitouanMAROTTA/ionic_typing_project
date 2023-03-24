import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';

import { QuoteListPage } from './quote-list.page';
import { QuoteListPageRoutingModule } from './quote-list-routing.module';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    QuoteListPageRoutingModule
  ],
  declarations: [QuoteListPage]
})
export class QuoteListPageModule {}
