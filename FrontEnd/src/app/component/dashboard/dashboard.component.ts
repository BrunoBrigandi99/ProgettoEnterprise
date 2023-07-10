import { ChangeDetectorRef, Component, OnDestroy } from '@angular/core';
import { ServiceService } from 'src/app/Service/service.service';
import { AuthService } from '../../Auth/auth.service';
import { Router } from '@angular/router';
import { FormControl, FormGroup } from '@angular/forms';


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent{

  constructor(public service: ServiceService, public auth: AuthService, private router: Router){}

  formCerca: FormGroup = new FormGroup({ cerca: new FormControl("") });

  onSubmit(){
    
    console.log("ok: ", this.formCerca.value.cerca)

  }


  hidden = false;


  toggleBadgeVisibility() {
    this.hidden = !this.hidden;
  }






}
