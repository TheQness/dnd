import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HomeComponent } from 'src/components/home/home.component';
import { BagofholdingComponent } from 'src/components/bagofholding/bagofholding.component';
import { CombattrackerComponent } from 'src/components/combattracker/combattracker.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    BagofholdingComponent,
    CombattrackerComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }