import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-abbigliamento',
  templateUrl: './abbigliamento.component.html',
  styleUrls: ['./abbigliamento.component.css']
})
export class AbbigliamentoComponent {

  constructor(private router: Router){}

  cliccato() {
    this.router.navigate(['/pag-annuncio']);
  }

  products = [
    {
      imageUrl: 'https://via.placeholder.com/350x250',
      title: 'Maglia in lana',
      price: '€ 20,00',
      description: 'Maglia in lana, taglia M'
    },
  ]
}
