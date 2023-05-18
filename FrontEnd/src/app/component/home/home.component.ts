import { Component } from '@angular/core';
import { NavigationExtras, Router } from '@angular/router';
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
    this.service.getProdotti().subscribe(pro => {
      this.prodotti = pro
    });


  }

  //converte immagine per poter essere aperta nell'html
  // toUrl(im: any){
  //   const imageUrl = `data:image/png;base64,${im}`;
  //   return imageUrl;
  // }



  //dato l'id dell'annuncio, va a quella pagina dell'annuncio
  prendiAnnuncio(id: number) {
    this.router.navigate(['/pag-annuncio', id]);
  }

  carrello() {
    this.router.navigate(['/carrello']);
  }



}

/* STATICO
  products = [
    {
      imageUrl: 'https://via.placeholder.com/350x250',
      title: 'Maglia in lana',
      price: '€ 20,00',
      description: 'Maglia in lana, taglia M'
    },
    {
      imageUrl: 'https://via.placeholder.com/350x250',
      title: 'Scarpe da corsa',
      price: '€ 50,00',
      description: 'Scarpe da corsa, taglia 42'
    },
    {
      imageUrl: 'https://via.placeholder.com/350x250',
      title: 'Orologio da polso',
      price: '€ 100,00',
      description: 'Orologio da polso vintage'
    },
    {
      imageUrl: 'https://via.placeholder.com/350x250',
      title: 'Libro di cucina',
      price: '€ 15,00',
      description: 'Libro di cucina italiano'
    },
    {
      imageUrl: 'https://via.placeholder.com/350x250',
      title: 'Libro di cucina',
      price: '€ 15,00',
      description: 'Libro di cucina italiano'
    },
    {
      imageUrl: 'https://via.placeholder.com/350x250',
      title: 'Libro di cucina',
      price: '€ 15,00',
      description: 'Libro di cucina italiano'
    },
    {
      imageUrl: 'https://via.placeholder.com/350x250',
      title: 'Libro di cucina',
      price: '€ 15,00',
      description: 'Libro di cucina italiano'
    },
    {
      imageUrl: 'https://via.placeholder.com/350x250',
      title: 'Libro di cucina',
      price: '€ 15,00',
      description: 'Libro di cucina italiano'
    },
    {
      imageUrl: 'https://via.placeholder.com/350x250',
      title: 'Libro di cucina',
      price: '€ 15,00',
      description: 'Libro di cucina italiano'
    },
    {
      imageUrl: 'https://via.placeholder.com/350x250',
      title: 'Libro di cucina',
      price: '€ 15,00',
      description: 'Libro di cucina italiano'
    },
    {
      imageUrl: 'https://via.placeholder.com/350x250',
      title: 'Libro di cucina',
      price: '€ 15,00',
      description: 'Libro di cucina italiano'
    },
  ];
  */
