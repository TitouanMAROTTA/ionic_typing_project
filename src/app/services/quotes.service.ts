import { Injectable } from '@angular/core';
import { Subject, Observable } from 'rxjs';
import {AngularFirestore, AngularFirestoreCollection} from '@angular/fire/firestore';
import { map } from 'rxjs/operators';
import { Quote } from '../models/quote.model';

@Injectable({
  providedIn: 'root'
})
export class QuotesService {

  private dbPath = '/quotes';
  quoteRef: AngularFirestoreCollection<Quote>;

  constructor(
    private db: AngularFirestore
  ){
    this.quoteRef = db.collection(this.dbPath);
  }

  getAllQuotes(): any{
    return this.quoteRef.snapshotChanges().pipe(
      map((changes: any) => {
        return changes.map((doc: any) => {
          return ({id: doc.payload.doc.id, ...doc.payload.doc.data()})
        })
      })
    )
  }

  saveNewQuote(quote: Quote): any {
    return new Observable(obs =>{
      this.quoteRef.add({...quote}).then(() => { obs.next();})
    })
  }

  get(id: any): any{
    return new Observable(obs => {this.quoteRef.doc(id).get().subscribe(res => {
      obs.next({id: res.id, ...res.data()});
    })})
  }

  update(quote: Quote){
    return new Observable(obs => {
      this.quoteRef.doc(quote.id).update(quote);
      obs.next();
    })
  }

  delete(id: any){
    this.db.doc(`quotes/${id}`).delete();
  }


}
