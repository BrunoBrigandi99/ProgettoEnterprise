import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/Auth/auth.service';
import { Utente } from 'src/app/Model/Utente';
import { ServiceService } from 'src/app/Service/service.service';

@Component({
  selector: 'app-registrati',
  templateUrl: './registrati.component.html',
  styleUrls: ['./registrati.component.css']
})
export class RegistratiComponent {

  formRegistrazione: FormGroup = new FormGroup({
    nome: new FormControl(''),
    cognome: new FormControl(''),
    email: new FormControl(''),
    password: new FormControl(''),
    posizione: new FormControl(''),
    telefono: new FormControl('')
  });

  constructor(private auth: AuthService, private service: ServiceService, private router: Router){}

  public utente: Utente = new Utente();

  onSubmit(){
    this.utente.nome = this.formRegistrazione.value.nome
    this.utente.cognome = this.formRegistrazione.value.cognome
    this.utente.email = this.formRegistrazione.value.email
    this.utente.password = this.formRegistrazione.value.password
    this.utente.posizione = this.formRegistrazione.value.posizione
    this.utente.telefono = this.formRegistrazione.value.telefono

    this.service.registrati(this.utente).subscribe(
      (response) => {
        console.log('La richiesta HTTP è stata completata con successo:', response);
        this.auth.accedi(response);
        this.router.navigate(['/profilo']);
      },
      (error) => {
        console.log('Si è verificato un errore durante la richiesta HTTP:', error);
      }
    );



  }

}