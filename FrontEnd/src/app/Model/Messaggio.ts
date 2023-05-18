import { Utente } from "./Utente";

export class Messaggio {
  id!: number;
  testo!: string;
  dataInvio!: Date;
  mittente!: Utente;
  destinatario!: Utente;
}
