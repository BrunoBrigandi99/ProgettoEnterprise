import { Component } from '@angular/core';

@Component({
  selector: 'app-carrello',
  templateUrl: './carrello.component.html',
  styleUrls: ['./carrello.component.css']
})
export class CarrelloComponent {
  /*
  // Oggetto che rappresenta il carrello
  let cart = {
    items: [], // array vuoto di prodotti
    total: 0 // totale inizializzato a 0
  };

  // Funzione per aggiungere un prodotto al carrello
  function addProductToCart(productId) {
    // Trova il prodotto corrispondente all'ID
    let product = products.find(p => p.id === productId);

    // Aggiungi il prodotto all'array del carrello
    cart.items.push(product);

    // Aggiorna il totale del carrello
    cart.total += product.price;

    // Aggiorna la visualizzazione del carrello
    updateCartDisplay();
  }

  // Funzione per aggiornare la visualizzazione del carrello
  function updateCartDisplay() {
    // Se il carrello è vuoto, nascondi il contenitore del carrello
    if (cart.items.length === 0) {
      document.querySelector('#cartItems').style.display = 'none';
      document.querySelector('#cartTotal').style.display = 'none';
      return;
    }

    // Altrimenti, mostra il contenitore del carrello e svuota la lista dei prodotti
    document.querySelector('#cartItems').style.display = 'block';
    document.querySelector('#cartTotal').style.display = 'block';
    document.querySelector('#cartItems').innerHTML = '';

    // Itera su ciascun prodotto nel carrello
    cart.items.forEach(product => {
      // Crea un elemento di lista per il prodotto
      let listItem = document.createElement('li');
      listItem.innerHTML = `
        <span>${product.title} - ${product.price} €</span>
        <button onclick="removeProductFromCart(${product.id})">Rimuovi</button>
      `;

      // Aggiungi l'elemento di lista alla lista dei prodotti nel carrello
      document.querySelector('#cartItems').appendChild(listItem);
    });

    // Aggiorna il totale del carrello
    document.querySelector('#cartTotal').textContent = `Totale: ${cart.total} €`;
  }

  // Funzione per rimuovere un prodotto dal carrello
  function removeProductFromCart(productId) {
    // Trova l'indice del prodotto corrispondente all'ID
    let indexToRemove = cart.items.findIndex(p => p.id === productId);

    // Rimuovi il prodotto dall'array del carrello
    cart.items.splice(indexToRemove, 1);

    // Aggiorna il totale del carrello
    cart.total -= product.price;

    // Aggiorna la visualizzazione del carrello
    updateCartDisplay();
  }
  */
}
