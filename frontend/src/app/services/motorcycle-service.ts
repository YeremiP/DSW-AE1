// import { Injectable } from '@angular/core';
// import { HttpClient } from '@angular/common/http';

// @Injectable({
//   providedIn: 'root'
// })
// export class MotorcycleService {

//   endpoint = 'http://localhost:8080/api/motorcycles';

//   constructor (private httpClient: HttpClient) { }
//   getMotorcycles(){
//     return this.httpClient.get(this.endpoint)
//   }

//   addMotorcycle(motorcycle: { brand: string; model: string }) {
//   return this.httpClient.post(this.endpoint, motorcycle);

// }

// }

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class MotorcycleService {
  endpoint = 'http://localhost:8080/api/motorcycles';

  constructor(private httpClient: HttpClient) {}

  getMotorcycles() {
    return this.httpClient.get<any[]>(this.endpoint);
  }

  addMotorcycle(motorcycle: { brand: string; model: string }) {
    return this.httpClient.post(this.endpoint, motorcycle);
  }

  deleteMotorcycle(id: any) {
    return this.httpClient.delete(`${this.endpoint}/${id}`);
  }

  updateMotorcycle(id: any, motorcycle: { brand: string; model: string }) {
    return this.httpClient.put(`${this.endpoint}/${id}`, motorcycle);
  }
}
