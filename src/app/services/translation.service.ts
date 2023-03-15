import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class TranslationService {
  private currentLanguage: string = 'en';
  private translations: any;

  constructor(private http: HttpClient) { }

  public setLanguage(language: string) {
    this.currentLanguage = language;
  }

  public getTranslation(key: string): string {
    return this.translations[key];
  }

  public loadTranslations(): Observable<any> {
    const url = `/assets/i18n/${this.currentLanguage}.json`;
    return this.http.get(url).pipe(
      map(translations => {
        this.translations = translations;
      })
    );
  }
}
