import { Messaggio } from "./Messaggio";
import { Prodotto } from "./Prodotto";
import { Recensione } from "./Recensione";

export class Utente {

  id!: number;
  nome!: string;
  cognome!: string;
  email!: String;
  password!: String; 
  posizione!: String;
  telefono!: String; 

  prodottiUtente!: Prodotto[];
  recensioniUtente!: Recensione[];
  messaggiUtente!: Messaggio[];
  carrelloUtente!: Prodotto[];

}
