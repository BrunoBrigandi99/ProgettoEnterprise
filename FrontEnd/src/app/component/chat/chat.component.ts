import { Component } from '@angular/core';
import { AuthService } from 'src/app/Auth/auth.service';
import { Messaggio } from 'src/app/Model/Messaggio';
import { ServiceService } from 'src/app/Service/service.service';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.css']
})
export class ChatComponent {

  constructor(public auth: AuthService, private service: ServiceService){}

  messaggi: Messaggio[] = [] 

  contatti: Messaggio[] = []

  ngOnInit(){

    // this.service.getContatti(this.auth.getUtenteCorrente().id.toString()).subscribe(cont => {
    //     this.contatti = cont
    //   })

    // this.service.getUltimiMessaggi(this.auth.getUtenteCorrente().id.toString()).subscribe(cont => {
    //   this.contatti = cont
    // })

    


    this.service.getMessaggiByIdUtente(this.auth.getUtenteCorrente().id.toString()).subscribe(mess => {
      this.messaggi = mess
    })

    for(const mess of this.messaggi){
      if (mess.destinatarioId != this.auth.getUtenteCorrente().id){
        
      }
    }



  }

}
