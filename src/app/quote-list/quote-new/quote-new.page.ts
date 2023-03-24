import { Component, OnInit } from '@angular/core';
import { TranslationService } from '../../services/translation.service';

import { Quote } from '../../models/quote.model';
import { QuotesService } from '../../services/quotes.service';

@Component({
  selector: 'app-quote-new',
  templateUrl: './quote-new.page.html',
  styleUrls: ['./quote-new.page.scss'],
})
export class QuoteNewPage implements OnInit {
  public currentLanguage: string = 'en';
  public quote! : Quote; 

  constructor(public translationService: TranslationService, private Quote: QuotesService) { }

  ngOnInit() {
    this.quote = new Quote();
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

  addNewQuote(){
    if(this.quote.author === ""){
      this.quote.author = 'John Doe'
    }

    if(this.quote.content === ""){
      this.quote.content = 'There is nothing to say for this quote...'
    }

    if(this.quote.title === ""){
      this.quote.title = 'A simple title for a simple quote'
    }

    this.Quote.saveNewQuote(this.quote).subscribe(() => {
      this.quote = new Quote()
    });
  }

}