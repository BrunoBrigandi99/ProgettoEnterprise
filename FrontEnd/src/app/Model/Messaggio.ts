import { Utente } from "./Utente";

export class Messaggio {
  id!: number;
  oggetto!: string;
  testo!: string;
  dataInvio!: Date;

  mittenteNome!: string;
  destinatarioNome!: string;

  mittenteId!: number;
  destinatarioId!: number;

}
