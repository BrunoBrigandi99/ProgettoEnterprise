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

  async onSubmit(){

    let str = this.formAccesso.value.email+":"+this.formAccesso.value.password
    //let str = "Paperino@email.it:passwd";
    let encodedStr = btoa(str);
    (await (this.service.accedi(encodedStr))).subscribe(
      (response) => {
        this.service.getUtenteByEmail(this.formAccesso.value.email).subscribe(
          (response) => {
            this.auth.accedi(response)

            console.log(this.auth.getUtenteCorrente())

            this.router.navigate(['/profilo'])
          }
        )
      }
    )

  }

  reindirizzaRegistrati(): void {
    this.router.navigate(['/registrati']);
  }

}
