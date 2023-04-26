import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-scarpe',
  templateUrl: './scarpe.component.html',
  styleUrls: ['./scarpe.component.css']
})
export class ScarpeComponent {

  constructor(private router: Router){}

  cliccato() {
    this.router.navigate(['/pag-annuncio']);
  }

  products = [
    {
      imageUrl: 'https://via.placeholder.com/350x250',
      title: 'Scarpa',
      price: '€ 20,00',
      description: 'Maglia in lana, taglia M'
    },
  ]
}
