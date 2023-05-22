import { Component } from '@angular/core';

interface Email {
  destinatario: string;
  timestamp: string;
  oggetto: string;
  corpo: string;
  expanded: boolean;
}

@Component({
  selector: 'app-messaggistica',
  templateUrl: './messaggistica.component.html',
  styleUrls: ['./messaggistica.component.css']
})
export class MessaggisticaComponent {

  emails: Email[] = [
    {
      destinatario: 'John Doe',
      timestamp: '10:00 AM',
      oggetto: 'Interesse per il Maglione',
      corpo: 'Vorrei acquistare il maglione asjdh asdhiue akgefg aigweiufgiwegfgwqoiegfi qewgfiqge ofigiuqgfruiqghi efgqogefigreiufquigrfqgli ergfiqogwefigrigfiqgeriufg eygfoqgeiyfgyrgfigqigfi yegfioqgweifgqiwgrfygqwi egfogwqeirfgyrqgfiqgf qewgfqgweifgqwiefgiyrgfiq qewgfoqgweifgqfwi mas sede efeferg ergregfa ',
      expanded: false
    },
    {
      destinatario: 'Vinted',
      timestamp: '11:30 AM',
      oggetto: 'Comunicazione aggiornamento privacy',
      corpo: 'Gentile utente ....',
      expanded: false
    },
    {
      destinatario: 'Bob Johnson',
      timestamp: '12:45 PM',
      oggetto: 'Richiesta Reso',
      corpo: 'Vorrei avere indietro i miei soldi...',
      expanded: false
    }
  ];

  toggleEmailBody(email: Email) {
    email.expanded = !email.expanded;
  }


}
