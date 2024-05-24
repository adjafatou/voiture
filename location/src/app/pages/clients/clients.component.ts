import { Component } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-clients',
  templateUrl: './clients.component.html',
  styleUrls: ['./clients.component.css']
})
export class ClientsComponent {
  constructor(private router: Router) { }

  consulterVoitures() {
    // Redirection vers la page de consultation des voitures
    this.router.navigate(['/voitures']);
  }

  reserverVoiture() {
    // Redirection vers la page de réservation des voitures
    this.router.navigate(['/reservations']);
  }

  payer() {
    // Redirection vers la page de paiement
    this.router.navigate(['/paiement']);
  }
}
