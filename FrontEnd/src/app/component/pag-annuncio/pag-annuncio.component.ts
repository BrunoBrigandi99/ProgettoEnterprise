import { Component, Input } from '@angular/core';
import { ActivatedRoute, NavigationExtras, Router } from '@angular/router';
import { ServiceService } from 'src/app/Service/service.service';

import { Prodotto } from 'src/app/Model/Prodotto';
import { Recensione } from 'src/app/Model/Recensione';
import { Utente } from 'src/app/Model/Utente';
import { Image } from 'src/app/Model/Image';
import { AuthService } from 'src/app/Auth/auth.service';
import { FormControl, FormGroup } from '@angular/forms';
import { Messaggio } from 'src/app/Model/Messaggio';

@Component({
  selector: 'app-pag-annuncio',
  templateUrl: './pag-annuncio.component.html',
  styleUrls: ['./pag-annuncio.component.css']
})
export class PagAnnuncioComponent {

  constructor(private route: ActivatedRoute, private service: ServiceService, private router: Router, public auth: AuthService ) {}

  formAggMes: FormGroup = new FormGroup({ nuovoMessaggio: new FormControl("") });

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
  }


  //converte immagine per poter essere aperta nell'html
  toUrl(imgAB: ArrayBuffer){
    const imgSt = new String(imgAB)
    if (imgSt[0]==="i")
      return 'data:image/png;base64,'+ imgAB
    else
      return "data:image/jpeg;base64,"+imgAB 
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


  onSubmit(){
    let messagg: Messaggio = new Messaggio
    messagg.destinatarioId = this.prodotto.venditoreId
    messagg.mittenteId = this.auth.getUtenteCorrente().id
    messagg.mittenteNome = this.auth.getUtenteCorrente().nome + " " + this.auth.getUtenteCorrente().cognome
    messagg.testo = this.formAggMes.value.nuovoMessaggio

    if (confirm("Sei sicuro di voler inviare il messaggio?")) {  
      this.service.salvaMessaggio(messagg).subscribe(
        (response) => {
          this.router.navigate(['/chat']);
        }
      )
    }
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


  confermaEliminazione(prodottoId: number) {
    if (confirm("Sei sicuro di voler eliminare l'annuncio?")) {
      this.eliminaAnnuncio(prodottoId);
    }
  }

  aggiungiAnnuncio(){
  
    

  }

  eliminaAnnuncio(prodottoId: number){
    this.service.deleteProdotto(prodottoId).subscribe(
      (response) => {
        this.router.navigate(['profilo']);
      }
      
    )
    
  }
  
  modificaAnnuncio(prodottoId: number){

  }

}
