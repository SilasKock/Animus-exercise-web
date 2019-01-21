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
    // Receive all apartments saved on api.
    return this.http.get('http://animusexerciseapi-dev.eu-central-1.elasticbeanstalk.com/api/apartments');
  }

  // API call for apartment creation
  // ToDo: Do i need to unsubscibe? Read more about .subscribe
  postApartment(apartment: ApartmentDTO){     
    return this.http.post<ApartmentDTO>('http://animusexerciseapi-dev.eu-central-1.elasticbeanstalk.com/api/apartments', apartment).subscribe(
      data => {
          console.log("POST Request is successful ", data);
      },
      error => {
          console.log("Error", error);
      }
     );
  }
}
