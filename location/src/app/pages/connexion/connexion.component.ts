import { Component } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { AuthentificationService } from 'src/app/services/authentification.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-connexion',
  templateUrl: './connexion.component.html',
  styleUrls: ['./connexion.component.css']
})
export class ConnexionComponent {
  email: string = '';
  password: string = '';
  errorMessage: string = '';

  constructor(private authService: AuthentificationService, private http: HttpClient ,     private router: Router

  ) { }

  loginUser() {
    const credentials = { email: this.email, mot_de_passe: this.password };
    this.authService.loginClient(credentials).subscribe(
      () => {
        this.router.navigate(['/clients']);
      },
      (error: HttpErrorResponse) => {
        this.errorMessage = error.statusText; // Utilisation du statut de l'erreur comme message
      }
    );
  }

  loginAgent() {
    const credentials = { email: this.email, mot_de_passe: this.password };
    this.authService.loginAgent(credentials).subscribe(
      () => {
        console.log("Connexion réussie !");
        this.router.navigate(['/agents']);

      },
      (error: HttpErrorResponse) => {
        this.errorMessage = error.statusText;
      }
    );
  }
}
