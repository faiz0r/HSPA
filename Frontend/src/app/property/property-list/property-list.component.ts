import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { PropertyCardComponent } from '../property-card/property-card.component';
import { HttpClient, HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-property-list',
  standalone: true,
  imports: [
    CommonModule,
    HttpClientModule,
    PropertyCardComponent
  ],
  templateUrl: './property-list.component.html',
  styleUrl: './property-list.component.css'
})
export class PropertyListComponent implements OnInit {

  properties: any;

  constructor(private http: HttpClient) {

  }

  ngOnInit(): void {
    this.http.get('data/properties.json').subscribe(
      data => {
        this.properties = data;
      }
    );
  }
}
