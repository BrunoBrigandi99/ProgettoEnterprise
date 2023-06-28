import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { Prodotto } from '../Model/Prodotto';
import { Utente } from '../Model/Utente';
import { Recensione } from '../Model/Recensione';
import { ProdottoBackend } from '../Model/ProdottoBackend';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {


  constructor(private http: HttpClient) { }

 


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

  setProdotto(prodotto: ProdottoBackend): Observable <Prodotto>{
    return this.http.post<Prodotto>('http://localhost:8080/prodotto-api/salva', prodotto);
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

  accedi() {
    //headers_object.append("Authorization", "Basic " + btoa("username:password"));     //conversione diretta di username e password


    // Passato come primo parametro, al posto del body?
    // const headers = new HttpHeaders({
    //   Authorization: 'Basic UGFwZXJpbm9AZW1haWwuaXQ6cGFzc3dk'
    // });
    // this.http.post('http://localhost:8080/login', headers).subscribe();


    // Passato come primo parametro, al posto del body?, senza basic
    // const headers = new HttpHeaders({
    //   Authorization: 'UGFwZXJpbm9AZW1haWwuaXQ6cGFzc3dk'
    // });
    // this.http.post('http://localhost:8080/login', headers).subscribe();


    // Header dentro option
    // const httpOptions = {
    //   headers: new HttpHeaders({
    //     Authorization: 'Basic UGFwZXJpbm9AZW1haWwuaXQ6cGFzc3dk'
    //   })
    // }
    // this.http.post('http://localhost:8080/login',null, httpOptions).subscribe()

    // Header dentro option senza basic
    // const httpOptions = {
    //   headers: new HttpHeaders({
    //     Authorization: 'Basic UGFwZXJpbm9AZW1haWwuaXQ6cGFzc3dk'
    //   })
    // }
    // this.http.post('http://localhost:8080/login',null, httpOptions).subscribe()




  }

  registrati(utente: Utente): Observable<Utente> {
    return this.http.post<Utente>('http://localhost:8080/utente-api/salva', utente);
  }







  /*METODI PER NOTIFICHE MESSAGGISTICA */
  badgeValue: number = 5;

  azzeraNumero(){
    this.badgeValue = 0;
  }




}
