import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { Observable, map, startWith } from 'rxjs';
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

  onSubmit(){
    this.utente.nome = this.formRegistrazione.value.nome
    this.utente.cognome = this.formRegistrazione.value.cognome
    this.utente.email = this.formRegistrazione.value.email
    this.utente.password = this.formRegistrazione.value.password
    this.utente.posizione = this.formRegistrazione.value.posizione
    this.utente.telefono = this.formRegistrazione.value.telefono

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



        // this.auth.accedi(response);
        // this.router.navigate(['/login']);
      },
      (error) => {
        console.log('Si è verificato un errore durante la richiesta HTTP:', error);
      }
    );



  }

}
