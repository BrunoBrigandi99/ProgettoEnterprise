import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/Auth/auth.service';
import { Messaggio } from 'src/app/Model/Messaggio';
import { Utente } from 'src/app/Model/Utente';
import { ServiceService } from 'src/app/Service/service.service';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.css']
})
export class ChatComponent {

  constructor(public auth: AuthService, private service: ServiceService, private router: Router){}

  formAggMes: FormGroup = new FormGroup({ nuovoMessaggio: new FormControl("") });

  tuttiMessaggi: Messaggio[] = [] 
  contatti: Utente[] = []

  contattoCorrente: Utente = new Utente 
  chat: Messaggio[] = [] 

  ngOnInit(){

    if(!this.auth.autenticato){
      this.router.navigate(['/accedi'])
    }else{

      this.service.getMessaggiByIdUtente(this.auth.getUtenteCorrente().id.toString()).subscribe( mess => {
        this.tuttiMessaggi = mess

        this.tuttiMessaggi.forEach((messaggio) => {
          //dal messaggio estrapola il !utenteCorrente
          let nuovoUtente = this.controlloMittDest(messaggio) 
          
          //se non è presente nei contatti lo aggiunge
          this.contrEsitCont(nuovoUtente)                 
        });
        if (this.tuttiMessaggi.length>0){ this.cambiaChat(this.contatti[0]) }
      })
    }

  }



  cambiaChat(contatto: Utente){
    this.contattoCorrente = contatto

    this.tuttiMessaggi.forEach((messaggio) => {
      if(this.controlloMittDest(messaggio).id === this.contattoCorrente.id){ this.chat.push(messaggio) }
    })

  }

  onSubmit(){
    let messagg: Messaggio = new Messaggio
    messagg.destinatarioId = this.contattoCorrente.id
    messagg.destinatarioNome = this.contattoCorrente.nome
    messagg.mittenteId = this.auth.getUtenteCorrente().id
    messagg.mittenteNome = this.auth.getUtenteCorrente().nome + " " + this.auth.getUtenteCorrente().cognome
    messagg.testo = this.formAggMes.value.nuovoMessaggio

    this.service.salvaMessaggio(messagg).subscribe(
      (response) => {
        this.tuttiMessaggi.push(messagg)
        this.chat.push(messagg)
        //this.formAggMes.value.nuovoMessaggio = ""
      }
    )
  }


  controlloMittDest(messaggio: Messaggio){
    if (messaggio.mittenteId === this.auth.getUtenteCorrente().id){
      let utente: Utente = new Utente 
      utente.id = messaggio.destinatarioId
      utente.nome = messaggio.destinatarioNome
      //console.log(utente)
      return utente
    }
    else {
      let utente: Utente = new Utente 
      utente.id = messaggio.mittenteId
      utente.nome = messaggio.mittenteNome
      //console.log(utente)
      return utente
    }
  }

  contrEsitCont(nuovoUtente: Utente){
    let esiste: boolean = false;
  
    this.contatti.forEach(contatto => {
      if (contatto.id === nuovoUtente.id) { esiste = true; }
    });
  
    if (!esiste) { this.contatti.push(nuovoUtente) }

  }
}
