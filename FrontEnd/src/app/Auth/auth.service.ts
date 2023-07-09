import { Injectable} from '@angular/core';
import { Utente } from '../Model/Utente';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor() { }

  private authorization = ""
  private utenteCorrente: Utente = new Utente();
  public carrello: number[] = [];


  accedi(utente: Utente){
    this.utenteCorrente = utente;
  }

  esci(){
    this.utenteCorrente = new Utente();
  }
  
  // Restituisce true se utenteCorrente è definito, false altrimenti
  isAuthenticated(): boolean {
    return !this.utenteCorrente;
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
