import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AuthentificationService } from 'src/app/services/authentification.service';

@Component({
  selector: 'app-inscription',
  templateUrl: './inscription.component.html',
  styleUrls: ['./inscription.component.css']
})


export class InscriptionComponent {
  client: any = {};

  constructor(private authService: AuthentificationService) { }

  onSubmit() {
    this.authService.registerClient(this.client)
      .subscribe(
        response => {
          console.log(response); // Réponse du serveur après inscription réussie
          // Réinitialiser le formulaire après inscription réussie
          this.client = {};
        },
        error => {
          console.error(error); // Gérer les erreurs d'inscription
        }
      );
  }
}

