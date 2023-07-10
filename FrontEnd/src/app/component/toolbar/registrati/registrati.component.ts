import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { Observable, map, startWith } from 'rxjs';
import { AuthService } from 'src/app/Auth/auth.service';
import { Utente } from 'src/app/Model/Utente';
import { ServiceService } from 'src/app/Service/service.service';
import { Validators } from '@angular/forms';

@Component({
  selector: 'app-registrati',
  templateUrl: './registrati.component.html',
  styleUrls: ['./registrati.component.css']
})
export class RegistratiComponent {



  formRegistrazione: FormGroup = new FormGroup({
    nome: new FormControl('', Validators.required),
    cognome: new FormControl('', Validators.required),
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', Validators.required),
    telefono: new FormControl('')
  });

  constructor(private auth: AuthService, private service: ServiceService, private router: Router){}

  public utente: Utente = new Utente();

  myControl = new FormControl('');
  options: string[] = ['Acquirente', 'Venditore'];
  filteredOptions: Observable<string[]> | undefined;

  ngOnInit() {
    this.filteredOptions = this.myControl.valueChanges.pipe(
      startWith(''),
      map(value => this._filter(value || '')),
    );
  }

  private _filter(value: string): string[] {
    const filterValue = value.toLowerCase();

    return this.options.filter(option => option.toLowerCase().includes(filterValue));
  }

  onSubmit() {
    if (this.formRegistrazione.valid) {
      this.utente.nome = this.formRegistrazione.value['nome'];
      this.utente.cognome = this.formRegistrazione.value['cognome'];
      this.utente.email = this.formRegistrazione.value['email'];
      this.utente.password = this.formRegistrazione.value['password'];
      this.utente.telefono = this.formRegistrazione.value['telefono'];

      this.service.registrati(this.utente).subscribe(
        async (response) => {
          console.log('La richiesta HTTP è stata completata con successo:', response);


          let str = this.formRegistrazione.value.email+":"+this.formRegistrazione.value.password
          let encodedStr = btoa(str);
          (await (this.service.accedi(encodedStr))).subscribe(
            (response) => {
              this.service.getUtenteByEmail(this.formRegistrazione.value.email).subscribe(
                (response) => {
                  this.auth.accedi(response)

                  console.log(this.auth.getUtenteCorrente())

                  this.router.navigate(['/profilo'])
                }
              )
            }
          )
        
       
        },
      (error) => {
        console.log('Si è verificato un errore durante la richiesta HTTP:', error);
      });
  }
}

}
