import { Injectable} from '@angular/core';
import { Utente } from '../Model/Utente';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor() { }

  public authorization = ""
  private utenteCorrente: Utente = new Utente();


  accedi(utente: Utente){
    this.utenteCorrente = utente;
  }

  esci(){
    this.utenteCorrente = new Utente();
  }
  
  // Restituisce true se utenteCorrente è definito, false altrimenti
  isAuthenticated(): boolean {
    return !!this.utenteCorrente;
  }

  // Restituisce l'utente corrente
  getutenteCorrente(): Utente {
    return this.utenteCorrente;
  }

  getToken(): string {
    return this.authorization
  }

  public setToken(token: string): void {
    this.authorization = token;
  }
  

  
}
