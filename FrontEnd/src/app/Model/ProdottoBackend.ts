import { Image } from "./Image";
import { ImageBackend } from "./ImageBackend";
import { Utente } from "./Utente";

export class ProdottoBackend{
    nomeProdotto!: string;
    prezzo!: number;
    venditoreId!: number;
    images!: ImageBackend[];

    
}


