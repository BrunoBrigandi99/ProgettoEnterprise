import { Utente } from "./Utente";

export class Recensione {
  id!: number;
  commento!: string;
  valutazione!: number;

  autoreId!: number;
  utenteRecensitoId!: number;

}
