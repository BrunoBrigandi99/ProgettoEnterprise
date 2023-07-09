import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './component/home/home.component';
import { DashboardComponent } from './component/dashboard/dashboard.component';
import { PagAnnuncioComponent } from './component/pag-annuncio/pag-annuncio.component';
import { ChiSiamoComponent } from './component/footer/chi-siamo/chi-siamo.component';
import { ComeFunzionaComponent } from './component/footer/come-funziona/come-funziona.component';
import { PrivacyComponent } from './component/footer/privacy/privacy.component';
import { ProfiloComponent } from './component/toolbar/profilo/profilo.component';
import { CarrelloComponent } from './component/toolbar/carrello/carrello.component';
import { AccediComponent } from './component/toolbar/accedi/accedi.component';
import { RegistratiComponent } from './component/toolbar/registrati/registrati.component';
import { AggiungiAnnuncioComponent } from './component/aggiungi-annuncio/aggiungi-annuncio.component';
import { MessaggisticaComponent } from './component/toolbar/messaggistica/messaggistica.component';
import { ProfiloVenditoreComponent } from './component/profilo-venditore/profilo-venditore.component';
import { ChatComponent } from './component/chat/chat.component';

const routes: Routes = [
  {path: '', component: DashboardComponent, children: [
    {path: '', redirectTo: 'home', pathMatch: 'full'},
    {path: 'home', component: HomeComponent},

    {path: 'messaggistica', component: MessaggisticaComponent},
    {path: 'chat', component: ChatComponent},

    {path: 'profilo', component: ProfiloComponent},
    {path: 'accedi', component: AccediComponent},
    {path: 'registrati', component: RegistratiComponent},

    {path: 'carrello', component: CarrelloComponent},

    {path: 'pag-annuncio/:id', component: PagAnnuncioComponent},
    {path: 'aggiungi-annuncio', component: AggiungiAnnuncioComponent},

    {path: 'chi-siamo', component: ChiSiamoComponent},
    {path: 'privacy', component: PrivacyComponent},
    {path: 'come-funziona', component: ComeFunzionaComponent},

    {path: 'profilo-venditore/:id', component: ProfiloVenditoreComponent},
  ]},




];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
