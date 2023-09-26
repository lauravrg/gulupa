import { Component, OnInit, inject } from '@angular/core';
import { AuthService } from '../../shared/services/auth.service';
import { Router } from '@angular/router';
import { SweetAlertsService } from '../../shared/services/sweet-alerts.service';

@Component({
  selector: 'app-header-form',
  templateUrl: './header-form.component.html',
  styleUrls : ['./header-form.component.css']
})
export class HeaderFormComponent implements OnInit {
  alert = inject(SweetAlertsService)
  supabase = inject(AuthService);
  router = inject(Router);
  sesion = this.supabase.sesion;
  ngOnInit() {
    // this.supabase.setSesion()
  }

  logOut() {
    this.alert.loadingAlert('Cerrando sesión')
    this.supabase
      .logOut()
      .then(() => {
        this.router.navigate(['/login']);
      })
      .catch((error) => {
        console.log(error);
      });
  }
}