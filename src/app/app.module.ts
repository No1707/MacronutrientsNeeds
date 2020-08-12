import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RevealComponent } from './reveal/reveal.component';
import { TDEEComponent } from './tdee/tdee.component';

@NgModule({
  declarations: [
    AppComponent,
    RevealComponent,
    TDEEComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
