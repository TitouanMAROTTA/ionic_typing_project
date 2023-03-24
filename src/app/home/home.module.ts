import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { HomePage } from './home.page';

import { HomePageRoutingModule } from './home-routing.module';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HomePageRoutingModule
  ],
  declarations: [HomePage]
})
export class HomePageModule {}



// import { NgModule } from '@angular/core';
// import { BrowserModule } from '@angular/platform-browser';
// import { RouteReuseStrategy } from '@angular/router';
// import { HttpClientModule } from '@angular/common/http';
// import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
// import { HomePage } from './home.page';
// import { HomePageRoutingModule } from './home-routing.module';

// @NgModule({
//   declarations: [HomePage],
//   imports: [BrowserModule, IonicModule.forRoot(), HomePageRoutingModule, HttpClientModule],
//   providers: [{ provide: RouteReuseStrategy, useClass: IonicRouteStrategy }],
//   bootstrap: [AppComponent],
// })
// export class AppModule {}
