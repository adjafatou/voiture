import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-agents',
  templateUrl: './agents.component.html',
  styleUrls: ['./agents.component.css']
})
export class AgentsComponent {
  constructor(private router: Router) { }


  consulterVoitures() {
    // Redirection vers la page de consultation des voitures
    this.router.navigate(['/voitures']);
  }

  ajouterVoiture() {
    // Redirection vers la page de consultation des voitures
    this.router.navigate(['/voitures']);
  }
  supprimerVoiture() {
    // Redirection vers la page de consultation des voitures
    this.router.navigate(['/voitures']);
  }
  confirmerReservation(){
    // Redirection vers la page de consultation des voitures
    this.router.navigate(['/voitures']);
  }
  rejeterReservation() {
    // Redirection vers la page de consultation des voitures
    this.router.navigate(['/voitures']);
  }

}
