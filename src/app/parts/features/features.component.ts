import { Component, OnInit, Input } from '@angular/core';
import {trigger, state, style, animate, transition, query, stagger} from '@angular/animations';
import * as landingPage from '../../../json/landingPage.json';

@Component({
  selector: 'app-features',
  templateUrl: './features.component.html',
  styleUrls: ['./features.component.css'],
  animations: [
    
    trigger('animasiTampilFeature', [
      transition('* => *',[
        // menginisialisasi awal tulisan diatas dengan opacity 0
        query(`.box-feature`, style({ opacity: 0, transform: 'translateY(-40px)' })),

        // kemudian ditambahkan animasi turun untuk setiap itemnya
        // dan ditambahkan gap 600ms per item, setelah animasi dijalankan
        query(`.box-feature`, stagger(600, [
          animate(`500ms ease-out`, style({ opacity: 1, transform: 'translateY(0)' }))
        ]))
      ])
    ])
  ],
})
export class FeaturesComponent implements OnInit {
  //features
  features: any;
  @Input() marginBottom;
  @Input() marginTop;
  constructor() { }

  ngOnInit(): void {
     //features
     this.features = landingPage.fitur;
  }

 

}
