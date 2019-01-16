import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor() { }

  // Get Apartments
  // Currently mock
  getApartments(){
    return [{ "id": 1, "einzugsdatum": "01.03.2019", "street": "Richtweg", "plz": "22880", "ort": "Wedel", "Land": "Deutschland", "email": "mock@web.de"}, { "id": 2, "einzugsdatum": "01.06.2019", "street": "Waldstraße", "plz": "22880", "ort": "Wedel", "Land": "Deutschland", "email": "mock2@web.de"}]
  }

  getTest(myString: string){
    return myString;
  }
}
