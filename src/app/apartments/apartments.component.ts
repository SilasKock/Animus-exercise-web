import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-apartments',
  templateUrl: './apartments.component.html',
  styleUrls: ['./apartments.component.scss']
})
export class ApartmentsComponent implements OnInit {

  apartments$: Object;
  constructor(private data: DataService) { }

  ngOnInit() {
    this.data.getApartments().subscribe(
      data => this.apartments$ = data);
    this.apartments$ = this.apartments$; 
  }

}
