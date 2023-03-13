import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { QuoteNewPageRoutingModule } from './quote-new-routing.module';

import { QuoteNewPage } from './quote-new.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    QuoteNewPageRoutingModule
  ],
  declarations: [QuoteNewPage]
})
export class QuoteNewPageModule {}
