import { Component, OnInit, Input } from '@angular/core';
import { TranslationService } from '../services/translation.service';

import { Quote } from '../models/quote.model';
import { QuotesService } from '../services/quotes.service';

@Component({
  selector: 'app-quote-list',
  templateUrl: './quote-list.page.html',
  styleUrls: ['./quote-list.page.scss'],
})

export class QuoteListPage implements OnInit {
  public currentLanguage: string = 'en';
  quotes! : any;

  constructor(public translationService: TranslationService, private Quote: QuotesService) { }

  public ngOnInit() {
    this.translationService.loadTranslations().subscribe();
    this.Quote.getAllQuotes().subscribe((data: any) => {this.quotes = data;});
  }

  public switchLanguage() {
    if (this.currentLanguage === 'en') {
      this.currentLanguage = 'fr';
    } else {
      this.currentLanguage = 'en';
    }
    this.translationService.setLanguage(this.currentLanguage);
    this.translationService.loadTranslations().subscribe();
  }

  public deleteQuote(id: any){
    this.Quote.delete(id);
  }
}

