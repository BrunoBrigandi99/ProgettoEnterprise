import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { Prodotto } from '../Model/Prodotto';
import { Utente } from '../Model/Utente';
import { Recensione } from '../Model/Recensione';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {


  constructor(private http: HttpClient) { }

  /* ALESSANDRO BACKEND
  //############################################################## PRODOTTO ##############################################################
  //Funziona
  getProdotti(): Observable <Prodotto[]>{
    return this.http.get<Prodotto[]>('http://localhost:8080/prodotto-api/findAll');
  }

  //Funziona
  getProdotto(idProdotto: string): Observable <Prodotto> {
    return this.http.get<Prodotto>('http://localhost:8080/prodotto-api/'+ idProdotto);
  }

  //FUNZIONA
  setProdotto(prodotto: Prodotto): Observable <Prodotto>{
    return this.http.post<Prodotto>('http://localhost:8080/prodotto-api/save', prodotto);
  }

  //MANCA BACKEND
  getProdottiByUserId(idUtente: String): Observable <Prodotto[]> {
    return this.http.get<Prodotto[]>('http://localhost:8080/prodotto-api/'+ idUtente);
  }

  //############################################################## RECENSIONE ##########################################################
  getRecensione(idUtente: string): Observable <Recensione[]> {
    return this.http.get<Recensione[]>("http://localhost:8080/utente-api/utenti/"+ idUtente +"/recensioni");
  }

  //############################################################## UTENTE ##############################################################
  accedi(utente: Utente): Observable<Utente> {
    return this.http.post<Utente>('http://localhost:8080/utente-api/accedi', utente);
  }

  registrati(utente: Utente): Observable <Utente>{
    return this.http.post<Utente>('http://localhost:8080/utente-api/creaUtente', utente);
  }*/




  // CHRISTIAN BACKEND
  //############################################################## PRODOTTO ##############################################################
  //Restituisce una lista di prodotti deve restituire un prodotto
  getProdotto(idProdotto: string): Observable <Prodotto> {
    return this.http.get<Prodotto>('http://localhost:8080/prodotto-api/prodotti/'+ idProdotto);
  }


  //FUNZIONA
  getProdotti(): Observable <Prodotto[]>{
    return this.http.get<Prodotto[]>('http://localhost:8080/prodotto-api/prodotti');
  }

  //FUNZIONA
  setProdotto(prodotto: Prodotto): Observable <Prodotto>{
    return this.http.post<Prodotto>('http://localhost:8080/prodotto-api/salva3', prodotto);
  }

  //
  getProdottiByUserId(idUtente: String): Observable <Prodotto[]> {
    return this.http.get<Prodotto[]>('http://localhost:8080/prodotto-api/'+ idUtente);
  }



  //############################################################## RECENSIONE ##############################################################
  getRecensione(idUtente: string): Observable <Recensione[]> {
    return this.http.get<Recensione[]>("http://localhost:8080/utente-api/utenti/"+ idUtente +"/recensioni");
  }

  //############################################################## UTENTE ##############################################################

  getUtente(idUtente: string): Observable <Utente> {
    return this.http.get<Utente>("http://localhost:8080/utente-api/utenti/"+ idUtente );
  }

  accedi(utente: Utente): Observable<Utente> {
    return this.http.post<Utente>('http://localhost:8080/utente-api/accedi', utente);
  }

  registrati(utente: Utente): Observable<Utente> {
    return this.http.post<Utente>('http://localhost:8080/utente-api/salva', utente);
  }







}
