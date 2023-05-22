import { Image } from "./Image";
import { Utente } from "./Utente";

export class Prodotto{
    id!: number;

    nomeProdotto!: string;
    descrizione!: string;
    prezzo!: number;
    categoria!: string;
    condizione!: number;

    brand!: string;
    colore!: string;
    taglia!: string;
    
    utente!: Utente;
    images!: Image[];
  
}


