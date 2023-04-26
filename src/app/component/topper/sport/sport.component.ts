import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sport',
  templateUrl: './sport.component.html',
  styleUrls: ['./sport.component.css']
})
export class SportComponent {

  constructor(private router: Router){}

  cliccato() {
    this.router.navigate(['/pag-annuncio']);
  }

  products = [
    {
      imageUrl: 'https://via.placeholder.com/350x250',
      title: 'Pallone',
      price: '€ 20,00',
      description: 'Maglia in lana, taglia M'
    },
  ]
}
