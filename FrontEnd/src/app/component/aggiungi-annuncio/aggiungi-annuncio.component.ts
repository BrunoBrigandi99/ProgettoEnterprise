import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormControl, FormGroup, NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/Auth/auth.service';

import { Image } from 'src/app/Model/Image';
import { ImageBackend } from 'src/app/Model/ImageBackend';
import { Prodotto } from 'src/app/Model/Prodotto';
import { ProdottoBackend } from 'src/app/Model/ProdottoBackend';
import { Utente } from 'src/app/Model/Utente';
import { ServiceService } from 'src/app/Service/service.service';


@Component({
  selector: 'app-aggiungi-annuncio',
  templateUrl: './aggiungi-annuncio.component.html',
  styleUrls: ['./aggiungi-annuncio.component.css']
})
export class AggiungiAnnuncioComponent {

  formAggAnn: FormGroup = new FormGroup({});

  ngOnInit(): void {

    if(!this.auth.isAuthenticated()){
      this.router.navigate(['/accedi'])
    }

    this.formAggAnn = new FormGroup({
      titolo: new FormControl(''),
      prezzo: new FormControl(''),
      categoria: new FormControl(''),
      condizione: new FormControl(''),
      brand: new FormControl(''),
      colore: new FormControl(''),
      descrizione: new FormControl(''),
      taglia: new FormControl('')
    });
  }

  prodotto = new Prodotto();
  images: ImageBackend[] = [];
  maxImage: Boolean = false;
  sicurezza: Boolean = false

  formato: ArrayBuffer = new ArrayBuffer(0);

  constructor (private auth: AuthService, private service: ServiceService, private router: Router){}

  onFileSelected(event: Event) {
    if (this.images.length == 8){ this.maxImage = true; return; }

    const fileInput = event.target as HTMLInputElement;
    if (!fileInput || !fileInput.files || fileInput.files.length === 0) { return; }
    const file: File = fileInput.files[0];
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => {

      this.formato = reader.result as ArrayBuffer

      const imgSt = new String(this.formato)

      console.log(imgSt.substring(0, 20))

      if (imgSt.startsWith("data:image/png;base64")) {
        console.log("png")
        this.formato = this.formato.slice(22);
      } 
      if (imgSt.startsWith("data:image/jpeg;base64")) {
        console.log("jpeg")
        this.formato = this.formato.slice(23);
      }

      const image: ImageBackend = new ImageBackend();
      image.image = this.formato;
      this.images.push(image);
 
    };
  }

  //converte immagine per poter essere aperta nell'html
  toUrl(imgAB: ArrayBuffer){
    const imgSt = new String(imgAB)
    if (imgSt[0]==="i")
      return 'data:image/png;base64,'+ imgAB
    else
      return "data:image/jpeg;base64,"+imgAB 
  }

  prodottoBackend: ProdottoBackend = new ProdottoBackend();

  onSubmit(){

    this.prodottoBackend.nomeProdotto = this.formAggAnn.value.titolo;
    this.prodottoBackend.prezzo = this.formAggAnn.value.prezzo;
    this.prodotto.descrizione = this.formAggAnn.value.descrizione;
    this.prodottoBackend.venditoreId = this.auth.getUtenteCorrente().id;

    this.prodottoBackend.images = this.images;

    this.service.setProdotto(this.prodottoBackend).subscribe( 
      (response) => {
        this.router.navigate(['/pag-annuncio', response.id]);
      },
      (error) => {
        //console.log('Si è verificato un errore durante la richiesta HTTP:', error);
      }
    );

  }









}
