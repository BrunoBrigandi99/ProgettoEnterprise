import { ChangeDetectorRef, Component, OnDestroy } from '@angular/core';
import { ServiceService } from 'src/app/Service/service.service';
import { AuthService } from '../../Auth/auth.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent{

  constructor(public service: ServiceService, public auth: AuthService, private router: Router){}

  hidden = false;


  toggleBadgeVisibility() {
    this.hidden = !this.hidden;
  }






}
