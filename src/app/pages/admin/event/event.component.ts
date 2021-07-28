import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-event',
  templateUrl: './event.component.html',
  styleUrls: ['./event.component.css']
})
export class EventComponent implements OnInit {
products: any;
  constructor() { }

  ngOnInit(): void {
    this.products = [
      {
        "code": 1,
        "name": "Mabrur",
        "category": "People",
        "quantity": 10
      }
    ];
  }

}
