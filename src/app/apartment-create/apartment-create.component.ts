import { Component, OnInit } from '@angular/core';
import { ApartmentDTO} from '../apartment-dto';
import { DataService } from '../data.service';

@Component({
  selector: 'app-apartment-create',
  templateUrl: './apartment-create.component.html',
  styleUrls: ['./apartment-create.component.scss']
})
export class ApartmentCreateComponent implements OnInit {

  // Initialize empty model 
  model = new ApartmentDTO(null,"","",null,"","","");
  submitted = false;
  constructor(private data: DataService) { }
  // TODO: submit form to api
  onSubmit() { 
    this.submitted = true
    this.data.postApartment(this.model);
  }
  get diagnostic() { return JSON.stringify(this.model); }
  

  ngOnInit() {
  }

}
