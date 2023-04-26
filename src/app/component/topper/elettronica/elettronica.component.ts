import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-elettronica',
  templateUrl: './elettronica.component.html',
  styleUrls: ['./elettronica.component.css']
})
export class ElettronicaComponent {

  constructor(private router: Router){}

  cliccato() {
    this.router.navigate(['/pag-annuncio']);
  }

  products = [
    {
      imageUrl: 'https://via.placeholder.com/350x250',
      title: 'Radio',
      price: '€ 20,00',
      description: 'Maglia in lana, taglia M'
    },
  ]
}
