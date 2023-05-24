import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ServiceService } from 'src/app/Service/service.service';

import { Prodotto } from 'src/app/Model/Prodotto';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

  constructor(private router: Router, private service: ServiceService){}

  public prodotti: Prodotto[] = [];

  ngOnInit(): void {
    this.service.getProdotti().subscribe(pro => this.prodotti = pro);

  }

  //converte immagine per poter essere aperta nell'html
  toUrl(imgAB: ArrayBuffer){
    const imgSt = new String(imgAB)
    
    if (imgSt[0]==="i")
      return 'data:image/png;base64,'+ imgAB
    else //tecnicamente dovrei fare il controllo se inisiza con 4
      return "data:image/jpeg;base64,/9j/"+imgAB
  }


  //dato l'id dell'annuncio, va a quella pagina dell'annuncio
  prendiAnnuncio(id: number) {
    this.router.navigate(['/pag-annuncio', id]);
  }

  carrello() {
    this.router.navigate(['/carrello']);
  }

}
