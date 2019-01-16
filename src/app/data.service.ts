import { Injectable } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor() { }

  // Get Apartments
  // Currently mock
  getApartments(){
    // Use HttpClientMpdule to receive data from api
    return [{ "id": 1, "einzugsdatum": "01.03.2019", "street": "Richtweg", "plz": "22880", "ort": "Wedel", "Land": "Deutschland", "email": "mock@web.de"}, { "id": 2, "einzugsdatum": "01.06.2019", "street": "Waldstraße", "plz": "22880", "ort": "Wedel", "Land": "Deutschland", "email": "mock2@web.de"}]
  }
}
