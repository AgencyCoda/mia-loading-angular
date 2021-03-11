import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MiaLoadingModule } from 'projects/agencycoda/mia-loading/src/public-api';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MiaLoadingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
