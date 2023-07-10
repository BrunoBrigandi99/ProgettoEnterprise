import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from 'src/app/Auth/auth.service';
import { Prodotto } from 'src/app/Model/Prodotto';
import { ServiceService } from 'src/app/Service/service.service';
import { Recensione } from 'src/app/Model/Recensione';







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
    else
      return "data:image/jpeg;base64,"+imgAB 
  }

  eliminaArticolo(index: number): void {
    this.totale -= this.prodotti[index].prezzo
    this.prodotti.splice(index, 1)
    this.auth.carrello.splice(index, 1)
  }

  acquistaSubito(index: number){
    
    if (confirm("Sei sicuro di voler acquistare?")) {
      this.service.deleteProdotto(this.prodotti[index].id).subscribe(
        (response) => {

          const aggCommento = prompt("Vuoi scrivere una recensione sul venditore?");
          if (aggCommento) {
        
            const aggRating = prompt("Quanto valuteresti questo venditore? ( 0 - 5 )");
          
            if (aggRating){ //esiste

              const numRating = parseInt(aggRating)

              if (numRating===1 || numRating===2 || numRating===3 || numRating===4 || numRating===5){
                let recensione: Recensione = new Recensione()
                recensione.autoreId = this.auth.getUtenteCorrente().id
                recensione.commento = response.toString()
                recensione.utenteRecensitoId = this.prodotti[index].venditoreId
                recensione.valutazione = numRating

                this.service.setRecensione(recensione).subscribe()
              }
            }
          }  
          this.eliminaArticolo(index)    
        }
      )
    }
  }

  acquistaSubitoTutti(){
    let errore: Boolean = false;
    if (confirm("Sei sicuro di volerli acquistare tutti?")) {
      this.prodotti.forEach((prodotto, index) => {
        this.service.deleteProdotto(prodotto.id).subscribe(
          (error) => { errore = true }
        )
      })

      if (!errore){
        this.auth.carrello.forEach((prodotto, index) => {
          this.auth.carrello = []
          this.prodotti = []
          this.totale = 0
        })
      

    }
      
    }
  }
    
  
}
