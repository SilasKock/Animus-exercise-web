import { Component, OnInit } from '@angular/core';
import { ApartmentDTO} from '../apartment-dto';

@Component({
  selector: 'app-apartment-create',
  templateUrl: './apartment-create.component.html',
  styleUrls: ['./apartment-create.component.scss']
})
export class ApartmentCreateComponent implements OnInit {

  // Initialize empty model 
  model = new ApartmentDTO(null,"","",null,"","","");
  submitted = false;

  // TODO: submit form to api
  onSubmit() { this.submitted = true}
  get diagnostic() { return JSON.stringify(this.model); }
  constructor() { }

  ngOnInit() {
  }

}
