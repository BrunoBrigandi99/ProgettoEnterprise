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

  ngOnInit(){
    this.service.getMessaggi(this.auth.getutenteCorrente().id.toString()).subscribe(mess => this.messaggi = mess)



  }

}
