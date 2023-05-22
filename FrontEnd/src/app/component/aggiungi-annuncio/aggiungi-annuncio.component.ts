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

  constructor (private auth: AuthService, private service: ServiceService, private router: Router){}

  onFileSelected(event: Event) {
    if (this.images.length == 8){ this.maxImage = true; return; }

    const fileInput = event.target as HTMLInputElement;
    if (!fileInput || !fileInput.files || fileInput.files.length === 0) { return; }
    const file: File = fileInput.files[0];
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => {
      const formato = reader.result as ArrayBuffer;

      const image: ImageBackend = new ImageBackend();
      image.image = formato; 

      //this.images.push(image);
 
    };
  }



  onSubmit(){

    this.prodotto.nomeProdotto = this.formAggAnn.value.titolo;
    this.prodotto.prezzo = this.formAggAnn.value.prezzo;
    this.prodotto.categoria = this.formAggAnn.value.categoria;
    this.prodotto.condizione = this.formAggAnn.value.condizione;
    this.prodotto.brand = this.formAggAnn.value.brand;
    this.prodotto.colore = this.formAggAnn.value.colore;
    this.prodotto.descrizione = this.formAggAnn.value.descrizione;
    this.prodotto.taglia = this.formAggAnn.value.taglia;
    //this.prodotto.immagini = this.images;

    const prodottoBackend: ProdottoBackend = new ProdottoBackend();
    prodottoBackend.nomeProdotto = this.formAggAnn.value.titolo;
    prodottoBackend.prezzo = this.formAggAnn.value.prezzo;
    prodottoBackend.venditoreId = 1;
    prodottoBackend.images = this.images;

    this.service.setProdotto(prodottoBackend).subscribe(
      (response) => {
        console.log('La richiesta HTTP è stata completata con successo:', response);
        this.router.navigate(['/pag-annuncio', response.id]);
      },
      (error) => {
        console.log('Si è verificato un errore durante la richiesta HTTP:', error);
      }
    );

  }









}
