import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import{ MatSliderModule } from '@angular/material/slider';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SmartComponent } from './smart/smart.component';

@NgModule({
  declarations: [
    AppComponent,
    SmartComponent
  ],
  imports: [
    BrowserModule,MatSliderModule,
    AppRoutingModule,
    BrowserAnimationsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
