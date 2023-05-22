import { ChangeDetectorRef, Component, OnDestroy } from '@angular/core';
import {MediaMatcher} from '@angular/cdk/layout';
import { ServiceService } from 'src/app/Service/service.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent{

  constructor(public service: ServiceService){}

  hidden = false;

  toggleBadgeVisibility() {
    this.hidden = !this.hidden;
  }


}