import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { DashboardComponent } from './component/dashboard/dashboard.component';
import { HomeComponent } from './component/home/home.component';
import { PagAnnuncioComponent } from './component/pag-annuncio/pag-annuncio.component';
import { AbbigliamentoComponent } from './component/topper/abbigliamento/abbigliamento.component';
import { ChiSiamoComponent } from './component/footer/chi-siamo/chi-siamo.component';
import { PrivacyComponent } from './component/footer/privacy/privacy.component';
import { AssistenzaComponent } from './component/footer/assistenza/assistenza.component';
import { ComeFunzionaComponent } from './component/footer/come-funziona/come-funziona.component';
import { ScarpeComponent } from './component/topper/scarpe/scarpe.component';
import { AccessoriComponent } from './component/topper/accessori/accessori.component';
import { ElettronicaComponent } from './component/topper/elettronica/elettronica.component';
import { LibriComponent } from './component/topper/libri/libri.component';
import { SportComponent } from './component/topper/sport/sport.component';
import { CasaComponent } from './component/topper/casa/casa.component';

import { AppRoutingModule } from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import {MatTabsModule} from '@angular/material/tabs';
import {MatBadgeModule} from '@angular/material/badge';
import {MatButtonModule} from '@angular/material/button';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatCardModule} from '@angular/material/card';
import {MatListModule} from '@angular/material/list';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatMenuModule} from '@angular/material/menu';
import { ProfiloComponent } from './component/toolbar/profilo/profilo.component';
import { CarrelloComponent } from './component/toolbar/carrello/carrello.component';





@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    HomeComponent,
    PagAnnuncioComponent,
    AbbigliamentoComponent,
    ChiSiamoComponent,
    PrivacyComponent,
    AssistenzaComponent,
    ComeFunzionaComponent,
    ScarpeComponent,
    AccessoriComponent,
    ElettronicaComponent,
    LibriComponent,
    SportComponent,
    CasaComponent,
    ProfiloComponent,
    CarrelloComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    MatToolbarModule,
    MatIconModule,
    MatTabsModule,
    MatBadgeModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    MatCardModule,
    MatListModule,
    MatGridListModule,
    MatMenuModule,

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
