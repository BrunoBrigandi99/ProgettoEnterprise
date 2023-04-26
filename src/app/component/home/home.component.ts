import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

  constructor(private router: Router){}

  cliccato() {
    this.router.navigate(['/pag-annuncio']);
  }

  carrello() {
    this.router.navigate(['/carrello']);
  }

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
}
