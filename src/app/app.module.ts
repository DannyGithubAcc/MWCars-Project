import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ApproutesModule } from './approutes/approutes.module';
import { HttpClientModule } from '@angular/common/http';


import { AppComponent } from './app.component';
import { HeadernavigationComponent } from './headernavigation/headernavigation.component';
import { FooterareaComponent } from './footerarea/footerarea.component';
import { HomeComponent } from './home/home.component';
import { VoorraadComponent } from './voorraad/voorraad.component';
import { ImportComponent } from './import/import.component';
import { NieuwbouwComponent } from './nieuwbouw/nieuwbouw.component';
import { ContactComponent } from './contact/contact.component';
import { OverOnsComponent } from './over-ons/over-ons.component';
import { NotfoundComponent } from './notfound/notfound.component';


@NgModule({
  declarations: [
    AppComponent,
    HeadernavigationComponent,
    FooterareaComponent,
    HomeComponent,
    VoorraadComponent,
    ImportComponent,
    NieuwbouwComponent,
    ContactComponent,
    OverOnsComponent,
    NotfoundComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot([]),
    ApproutesModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
