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
    //dall'id pel prodotto ricevuto come parametro l'id del venditore
    let id: string = "";
    id += this.route.snapshot.paramMap.get("id");

    //dall'id del venditore chiedo i dati del venditore
    this.service.getUtente(id).subscribe(ute => this.utente = ute)

    //dall'id del venditore chiedo tutti i prodotti di questo venditore
    this.service.getProdottiByUserId(id).subscribe(pro => this.prodotti = pro)
    
  }

  //dato l'id dell'annuncio, va a quella pagina dell'annuncio
  prendiAnnuncio(id: number) {
    this.router.navigate(['/pag-annuncio', id]);
  }

  //converte immagine per poter essere aperta nell'html
  toUrl(imgAB: ArrayBuffer){
    const imgSt = new String(imgAB)
    
    if (imgSt[0]==="i")
      return 'data:image/png;base64,'+ imgAB
    else //tecnicamente dovrei fare il controllo se inizia con 4
      //return "data:image/jpeg;base64,/9j/"+imgAB //aggiungi annunci dovrebbe salvare senza /9j/
      return "data:image/jpeg;base64,"+imgAB //queste statiche sono state salvate in questo modo, 
  }



}


