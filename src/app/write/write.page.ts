import { Component, OnInit, Input } from '@angular/core';
import { TranslationService } from '../services/translation.service';

// import { Quote } from '../models/quote.model';
// import { QuotesService } from '../services/quotes.service';

@Component({
  selector: 'app-write',
  templateUrl: './write.page.html',
  styleUrls: ['./write.page.scss'],
})
export class WritePage implements OnInit {
  public currentLanguage: string = 'en';

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

