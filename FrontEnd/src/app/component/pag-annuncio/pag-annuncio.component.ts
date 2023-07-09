import { Component, Input } from '@angular/core';
import { ActivatedRoute, NavigationExtras, Router } from '@angular/router';
import { ServiceService } from 'src/app/Service/service.service';

import { Prodotto } from 'src/app/Model/Prodotto';
import { Recensione } from 'src/app/Model/Recensione';
import { Utente } from 'src/app/Model/Utente';
import { Image } from 'src/app/Model/Image';
import { AuthService } from 'src/app/Auth/auth.service';

@Component({
  selector: 'app-pag-annuncio',
  templateUrl: './pag-annuncio.component.html',
  styleUrls: ['./pag-annuncio.component.css']
})
export class PagAnnuncioComponent {

  constructor(private route: ActivatedRoute, private service: ServiceService, private router: Router, public auth: AuthService ) {}

  prodotto: Prodotto = new Prodotto();    //va modificato backend, deve ricevere un prodotto e non un array di prodotti, va modificato anche service e html
  utente: Utente = new Utente();
  recensioni: Recensione[] = [];
  altriProd: Prodotto[] = [];
  prodottoAggiunto: boolean = false;

  prodotti: Prodotto[] = []


  ngOnInit() {
    //dall'id pel prodotto ricevuto come parametro prendo il prodotto
    let id: string = "";
    id += this.route.snapshot.paramMap.get("id");

    this.service.getProdotto(id).subscribe(pro => {
      this.prodotto = pro

      this.service.getUtente(this.prodotto.venditoreId.toString()).subscribe(ute => this.utente = ute)

      //ottengo tutte le recensioni di questo venditore
      this.service.getRecensione(this.prodotto.venditoreId.toString()).subscribe(rec => this.recensioni = rec)

      //ottengo tutti i prodotti di questo venditore
      this.service.getProdottiByUserId(this.prodotto.id.toString()).subscribe(pro => this.prodotti = pro)
     

    });





    //this.recensioni = this.utente.recensioni;
    //this.service.getRecensioni(this.utente).subscribe(rec => this.recensioni = rec)

    //this.altriProd = this.utente.prodotti;
    //this.service.getProdottiByUtente(this.utente).subscribe(pro => this.altriProd = pro)
    //this.service.getProdotti().subscribe(prod => this.altriProd = prod); SOLO PER PROVA
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

  //modifica l'immagine principale con quelle secondarie
  ottieniFoto(numero: number){
    if (this.prodotto.images && this.prodotto.images[numero] != undefined){
      //return this.toUrl(this.prodotto.images[numero].image);
      return this.toUrl(this.prodotto.images[numero].image);
    }else{ return "assets/NoImage.jpg";}
  }

  //cambia l'immagine principale c'è un errore quando si clicca sulle images non caricate
  cambiaImmPrin(valore: number){
    if(this.toUrl(this.prodotto.images[valore].image) !== "assets/NoImage.jpg"){
      const imm: Image = this.prodotto.images[0];
      this.prodotto.images[0] = this.prodotto.images[valore];
      this.prodotto.images[valore] = imm;
    }
  }

  //dato l'id dell'utente, va a quella pagina del profilo del venditore
  prendiUtente(id: number) {
    this.router.navigate(['/profilo-venditore', id]);
  }



  //dato l'id dell'annuncio, va a quella pagina dell'annuncio
  prendiAnnuncio(id: number) {
    this.router.navigate(['/pag-annuncio', id]);
  }


  addCart(prodottoId: number ){
    if (!this.auth.isAuthenticated()){
      this.router.navigate(['accedi']);
    }

    if (!this.auth.carrello.includes(prodottoId)) {
      this.auth.carrello.push(prodottoId)
    }
    this.prodottoAggiunto = true;
  }

  aggiungiAnnuncio(){

  }

  eliminaAnnuncio(prodottoId: number){}
  
  modificaAnnuncio(prodottoId: number){

  }

}
