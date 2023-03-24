// import { Component } from '@angular/core';

// @Component({
//   selector: 'app-root',
//   templateUrl: 'app.component.html',
//   styleUrls: ['app.component.scss'],
// })
// export class AppComponent {
//   constructor() {}
// }







import { Component, OnInit } from '@angular/core';
import { TranslationService } from './services/translation.service';

// @Component({
//   selector: 'app-root',
//   template: `
//     <h1>{{ translationService.getTranslation('homepageTitle') }}</h1>
//     <p>{{ translationService.getTranslation('homepageDescription') }}</p>
//     <button (click)="switchLanguage()">{{ currentLanguage }}</button>
//   `,
// })
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent implements OnInit {
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
