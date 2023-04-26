import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-accessori',
  templateUrl: './accessori.component.html',
  styleUrls: ['./accessori.component.css']
})
export class AccessoriComponent {

  constructor(private router: Router){}

  cliccato() {
    this.router.navigate(['/pag-annuncio']);
  }

  products = [
    {
      imageUrl: 'https://via.placeholder.com/350x250',
      title: 'Collana',
      price: '€ 20,00',
      description: 'Maglia in lana, taglia M'
    },
  ]
}
