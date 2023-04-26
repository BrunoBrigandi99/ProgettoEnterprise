import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-libri',
  templateUrl: './libri.component.html',
  styleUrls: ['./libri.component.css']
})
export class LibriComponent {

  constructor(private router: Router){}

  cliccato() {
    this.router.navigate(['/pag-annuncio']);
  }

  products = [
    {
      imageUrl: 'https://via.placeholder.com/350x250',
      title: 'Libro',
      price: '€ 20,00',
      description: 'Maglia in lana, taglia M'
    },
  ]
}
