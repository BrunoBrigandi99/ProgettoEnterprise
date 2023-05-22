import { Utente } from "./Utente";

export class Messaggio {
  id!: number;
  oggetto!: string;
  testo!: string;
  dataInvio!: Date;
  mittente!: Utente;
  destinatario!: Utente;
}
