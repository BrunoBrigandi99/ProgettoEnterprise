import { Injectable } from '@angular/core';
import { Utente } from '../Model/Utente';
import { ServiceService } from '../Service/service.service';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private service: ServiceService) { }

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

  
}
