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

  onSubmit() { 
    this.submitted = true
    // submit apartment to api
    this.data.postApartment(this.model);
  }

  // ForInfo: how can i use this effectively 
  get diagnostic() { return JSON.stringify(this.model); }
  
  ngOnInit() {
  }
}
