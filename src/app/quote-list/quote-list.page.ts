// import { Component, OnInit } from '@angular/core';

// @Component({
//   selector: 'app-quote-list',
//   templateUrl: './quote-list.page.html',
//   styleUrls: ['./quote-list.page.scss'],
// })
// export class QuoteListPage implements OnInit {

//   constructor() { }

//   ngOnInit() {
//   }

// }




import { Component, OnInit } from '@angular/core';
import { TranslationService } from '../services/translation.service';

@Component({
  selector: 'app-quote-list',
  templateUrl: './quote-list.page.html',
  styleUrls: ['./quote-list.page.scss'],
})
export class QuoteListPage implements OnInit {
  public currentLanguage: string = 'en';
  quotes = [
    {
      id: 1,
      title: 'Super quote',
      content: 'Une citation n\'est jamais rien de plus que quelques mots.',
      author: 'Titouan'
    },
    {
      id: 2,
      title: 'Super quote',
      content: 'Une citation n\'est jamais rien de plus que quelques mots.',
      author: 'Titouan'
    },
    {
      id: 3,
      title: 'Super quote',
      content: 'Une citation n\'est jamais rien de plus que quelques mots.',
      author: 'Titouan'
    },
    {
      id: 4,
      title: 'Super quote',
      content: 'Une citation n\'est jamais rien de plus que quelques mots.',
      author: 'Titouan'
    }
  ]

  constructor(public translationService: TranslationService) { }

  public ngOnInit() {
    this.translationService.loadTranslations().subscribe();
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
}

