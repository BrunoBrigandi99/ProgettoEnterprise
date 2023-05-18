import { ChangeDetectorRef, Component, OnDestroy } from '@angular/core';
import {MediaMatcher} from '@angular/cdk/layout';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent{
  hidden = false;

  toggleBadgeVisibility() {
    this.hidden = !this.hidden;

  }

  badgeValue: number = 5;

  aumentaBadge(){
    this.badgeValue++;
  }

  diminuisciBadge(){
    if(this.badgeValue > 0){
      this.badgeValue--;
    }
  }

  azzeraBadge(){
    this.badgeValue = 0;
  }
}
