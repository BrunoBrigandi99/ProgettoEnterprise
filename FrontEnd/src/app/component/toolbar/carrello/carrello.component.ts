import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from 'src/app/Auth/auth.service';
import { Prodotto } from 'src/app/Model/Prodotto';
import { ServiceService } from 'src/app/Service/service.service';



@Component({
  selector: 'app-carrello',
  templateUrl: './carrello.component.html',
  styleUrls: ['./carrello.component.css']
})

export class CarrelloComponent {

  constructor(private route: ActivatedRoute, private service: ServiceService, private router: Router, private auth: AuthService ) {}


  totale: number = 0
  prodotti: Prodotto[] = [];

  ngOnInit(): void {
    this.auth.carrello.forEach((elemento) => {
      this.service.getProdotto(elemento.toString()).subscribe((pro: Prodotto) => {
        this.prodotti.push(pro);
        this.totale+=pro.prezzo
      });
    });

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

  eliminaArticolo(index: number): void {
    this.totale -= this.prodotti[index].prezzo
    this.prodotti.splice(index, 1)
    this.auth.carrello.splice(index, 1)
  }
}
