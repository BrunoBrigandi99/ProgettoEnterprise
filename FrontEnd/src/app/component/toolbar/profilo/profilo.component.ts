import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/Auth/auth.service';
import { Prodotto } from 'src/app/Model/Prodotto';
import { Recensione } from 'src/app/Model/Recensione';
import { ServiceService } from 'src/app/Service/service.service';

@Component({
  selector: 'app-profilo',
  templateUrl: './profilo.component.html',
  styleUrls: ['./profilo.component.css']
})
export class ProfiloComponent {

  constructor(public auth: AuthService, private service: ServiceService, private router: Router){}

  prodotti: Prodotto[] = []
  recensioni: Recensione[] = []

  ngOnInit(){
    //ottengo tutti i prodotti di questo venditore
    this.service.getProdottiByUserId(this.auth.getutenteCorrente().id.toString()).subscribe(pro => this.prodotti = pro)

    //ottengo tutte le recensioni di questo venditore
    this.service.getRecensione(this.auth.getutenteCorrente().id.toString()).subscribe(rec =>{ this.recensioni = rec
    console.log(this.recensioni)
    })

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



  //dato l'id dell'annuncio, va a quella pagina dell'annuncio
  prendiAnnuncio(id: number) {
    this.router.navigate(['/pag-annuncio', id]);
  }

}
