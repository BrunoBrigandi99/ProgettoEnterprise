import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from 'src/app/Auth/auth.service';
import { Prodotto } from 'src/app/Model/Prodotto';
import { Utente } from 'src/app/Model/Utente';
import { ServiceService } from 'src/app/Service/service.service';

@Component({
  selector: 'app-profilo-venditore',
  templateUrl: './profilo-venditore.component.html',
  styleUrls: ['./profilo-venditore.component.css']
})
export class ProfiloVenditoreComponent {

  constructor(public auth: AuthService, private service: ServiceService, private router: Router, private route: ActivatedRoute){}

  prodotti: Prodotto[] = [];
  utente: Utente = new Utente;

  ngOnInit(){
    //dall'id pel prodotto ricevuto come parametro prendo il prodotto
    let id: string = "";
    id += this.route.snapshot.paramMap.get("id");

    this.service.getUtente(id).subscribe(ute => this.utente = ute)

    this.service.getProdottiByUserId(id).subscribe(pro => {
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
