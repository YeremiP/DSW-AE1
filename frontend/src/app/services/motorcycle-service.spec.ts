import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MotorcycleService {
  private apiUrl = 'http://localhost:8080/api/motorcycles'; // Ajusta tu endpoint

  constructor(private http: HttpClient) {}

  addMotorcycle(motorcycle: { brand: string; model: string }): Observable<any> {
    return this.http.post(this.apiUrl, motorcycle);
  }

  getMotorcycles(): Observable<any[]> {
    return this.http.get<any[]>(this.apiUrl);
  }
}
