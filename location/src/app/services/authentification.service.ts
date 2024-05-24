import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AuthentificationService {

  private baseUrl = 'http://localhost:3000'; // URL de votre backend Express.js

  constructor(private http: HttpClient) { }

  registerClient(clientData: any) {
    return this.http.post(`${this.baseUrl}/clients/signup`, clientData);
  }

  loginClient(credentials: any) {
    return this.http.post(`${this.baseUrl}/clients/login`, credentials);
  }

  loginAgent(credentials: any) {
    return this.http.post(`${this.baseUrl}/agents/login`, credentials);
  }
}
