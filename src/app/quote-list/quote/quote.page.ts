import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';
import { TranslationService } from '../../services/translation.service';

@Component({
  selector: 'app-quote',
  templateUrl: './quote.page.html',
  styleUrls: ['./quote.page.scss'],
})
export class QuotePage implements OnInit {
  public currentLanguage: string = 'en';
  modif: boolean = false;

  constructor(
    public translationService: TranslationService,
    private alertCtrl : AlertController
    ) { }

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

  async setModif() {
    if(!this.modif) {
      const alert = await this.alertCtrl.create({
        header: 'Êtes-vous sûr de vouloir modifier ?',
        subHeader: 'Vous rendrez possible la modification',
        buttons: [
          {
            text: 'Annuler',
            role: 'Cancel'
          },{
            text:'Confirmer',
            handler: () => { this.modif = !this.modif}
          }
        ]
      });

      await alert.present();
    } else {
      this.modif = !this.modif;
    }
  }

}

