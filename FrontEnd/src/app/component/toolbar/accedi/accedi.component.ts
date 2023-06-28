import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/Auth/auth.service';
import { Utente } from 'src/app/Model/Utente';
import { ServiceService } from 'src/app/Service/service.service';

@Component({
  selector: 'app-accedi',
  templateUrl: './accedi.component.html',
  styleUrls: ['./accedi.component.css']
})
export class AccediComponent {

  formAccesso: FormGroup = new FormGroup({
    email: new FormControl(''),
    password: new FormControl(''),
  });

  constructor(private service: ServiceService, private auth: AuthService, private router: Router){}

  utente: Utente = new Utente();

  onSubmit(){
    // this.utente.email = this.formAccesso.value.email
    // this.utente.password = this.formAccesso.value.password

    // this.service.accedi(this.utente).subscribe(
    //   (response) => {
    //     console.log('La richiesta HTTP è stata completata con successo:', response);
    //     this.auth.accedi(response);
    //     this.router.navigate(['/profilo']);
    //   },
    //   (error) => {
    //     console.log('Si è verificato un errore durante la richiesta HTTP:', error);
    //   }
    // );

    this.service.accedi()

  }

}
