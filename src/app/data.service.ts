import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ApartmentDTO} from './apartment-dto';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http: HttpClient) { }

  // Get Apartments
  // Currently mock
  getApartments(){
    // Use HttpClientMpdule to receive data from api
    //return [{ "id": 1, "einzugsdatum": "01.03.2019", "street": "Richtweg", "plz": "22880", "ort": "Wedel", "Land": "Deutschland", "email": "mock@web.de"}, { "id": 2, "einzugsdatum": "01.06.2019", "street": "Waldstraße", "plz": "22880", "ort": "Wedel", "Land": "Deutschland", "email": "mock2@web.de"}]
    // ToDo: Switch url on prod
    var observ = this.http.get<ApartmentDTO>('https://localhost:44327/api/Apartments');
    var obsert2 = this.http.get('https://jsonplaceholder.typicode.com/users');
    return this.http.get('https://localhost:44327/api/Apartments');
  }

  // Post new apartment to api
  postApartment(apartment: ApartmentDTO){     
    return this.http.post<ApartmentDTO>('https://localhost:44327/api/Apartments', apartment).subscribe(
      data => {
          console.log("POST Request is successful ", data);
      },
      error => {
          console.log("Error", error);
      }
     );
  }
}
