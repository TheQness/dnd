import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HomeComponent } from 'src/components/home/home.component';
import { BagofholdingComponent } from 'src/components/bagofholding/bagofholding.component';
import { CombattrackerComponent } from 'src/components/combattracker/combattracker.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AppRoutingModule } from './app.routing-module';
import { WildmagicComponent } from 'src/components/wildmagic/wildmagic.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    BagofholdingComponent,
    CombattrackerComponent,
    WildmagicComponent
  ],
  imports: [
    BrowserModule,
    NgbModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
