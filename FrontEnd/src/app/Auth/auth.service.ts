import { Injectable} from '@angular/core';
import { Utente } from '../Model/Utente';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor() { }

  autenticato: Boolean = false
  private authorization = ""
  private utenteCorrente: Utente = new Utente();
  public carrello: number[] = [];




  accedi(utente: Utente){
    this.utenteCorrente = utente;
    this.autenticato = true
  }

  esci(){
    this.utenteCorrente = new Utente();
    this.autenticato = false
  }

  // Restituisce true se autenicato
  isAuthenticated(): Boolean {
    return this.autenticato
  }

  // Restituisce l'utente corrente
  getUtenteCorrente(): Utente {
    return this.utenteCorrente;
  }

  getToken(): string {
    return this.authorization
  }

  public setToken(token: string): void {
    this.authorization = token;
  }



}
