import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/Auth/auth.service';
import { Prodotto } from 'src/app/Model/Prodotto';
import { ServiceService } from 'src/app/Service/service.service';

@Component({
  selector: 'app-profilo-venditore',
  templateUrl: './profilo-venditore.component.html',
  styleUrls: ['./profilo-venditore.component.css']
})
export class ProfiloVenditoreComponent {

  constructor(public auth: AuthService, private service: ServiceService, private router: Router){}

  prodotti: Prodotto[] = [];

  ngOnInit(){
    this.service.getProdottiByUserId(this.auth.getutenteCorrente().id.toString()).subscribe(pro => {
      this.prodotti = pro
    });

  }

  //dato l'id dell'annuncio, va a quella pagina dell'annuncio
  prendiAnnuncio(id: number) {
    this.router.navigate(['/pag-annuncio', id]);
  }

  venditore = {
    nome:"Cosimo", cognome:"Coso",email:"aaaa@.gmail.com", posizione:"Cosenza", telefono:"0965487"
  }

}
