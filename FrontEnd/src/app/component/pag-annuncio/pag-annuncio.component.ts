import { Component, Input } from '@angular/core';
import { ActivatedRoute, NavigationExtras, Router } from '@angular/router';
import { ServiceService } from 'src/app/Service/service.service';

import { Prodotto } from 'src/app/Model/Prodotto';
import { Recensione } from 'src/app/Model/Recensione';
import { Utente } from 'src/app/Model/Utente';
import { Image } from 'src/app/Model/Image';

@Component({
  selector: 'app-pag-annuncio',
  templateUrl: './pag-annuncio.component.html',
  styleUrls: ['./pag-annuncio.component.css']
})
export class PagAnnuncioComponent {

  constructor(private route: ActivatedRoute, private service: ServiceService, private router: Router ) {}

  prodotto: Prodotto = new Prodotto();    //va modificato backend, deve ricevere un prodotto enon un array di prodotti, va modificato anche service e html
  utente: Utente = new Utente();
  recensioni: Recensione[] = [];
  altriProd: Prodotto[] = [];


  ngOnInit() {
    //dall'id pel prodotto ricevuto come parametro prendo il prodotto
    let id: string = "";
    id += this.route.snapshot.paramMap.get("id");
    this.service.getProdotto(id).subscribe(pro => this.prodotto = pro);



    //this.utente = this.prodotto.utente;
    //this.service.getUtente(this.prodotto.venditoreId.toString()).subscribe(ute => this.utente = ute)

    //this.recensioni = this.utente.recensioni;
    //this.service.getRecensioni(this.utente).subscribe(rec => this.recensioni = rec)

    //this.altriProd = this.utente.prodotti;
    //this.service.getProdottiByUtente(this.utente).subscribe(pro => this.altriProd = pro)
    //this.service.getProdotti().subscribe(prod => this.altriProd = prod); SOLO PER PROVA
  }


  //converte immagine per poter essere aperta nell'html
  toUrl(im: any){
    const imageUrl = `data:image/png;base64,${im}`;
    return imageUrl;
  }

  //modifica l'immagine principale con quelle secondarie
  ottieniFoto(numero: number){
    if (this.prodotto.immagini && this.prodotto.immagini[numero] != undefined){
      //return this.toUrl(this.prodotto.immagini[numero].image);
      return this.prodotto.immagini[numero].image;
    }else{ return "assets/NoImage.jpg";}
  }

  //cambia l'immagine principale c'è un errore quando si clicca sulle immagini non caricate
  cambiaImmPrin(valore: number){
    if(this.prodotto.immagini[valore].image !== "assets/NoImage.jpg"){
      const imm: Image = this.prodotto.immagini[0];
      this.prodotto.immagini[0] = this.prodotto.immagini[valore];
      this.prodotto.immagini[valore] = imm;
    }
  }

  //dato l'id dell'annuncio, va a quella pagina dell'annuncio
  prendiAnnuncio(id: number) {
    this.router.navigate(['/pag-annuncio', id]);
  }

}
