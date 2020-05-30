import { Component, OnInit } from '@angular/core';
import { Painting } from '../models/Paintings';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  paintings: Painting[] =  [
    {
      id: '1',
      category: 'canvas',
      title: 'Painting#1',
      // tslint:disable-next-line: max-line-length
      description: 'Lorem ipsum dolor sit amet, consetetur sadipscin elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing ',
      imageUrls: ['assets/Paintings/Jester.png'],
      price: 5000,
      detail: 'Canvas | 120cm x 68cm | Charcoal'
    },
    {
      id: '2',
      category: 'canvas',
      title: 'Painting#1',
      // tslint:disable-next-line: max-line-length
      description: 'Lorem ipsum dolor sit amet, consetetur sadipscin elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing ',
      imageUrls: ['assets/Paintings/SmellingFlowers.png'],
      price: 5000,
      detail: 'Canvas | 120cm x 68cm | Charcoal'
    },
    {
      id: '3',
      category: 'canvas',
      title: 'Painting#1',
      // tslint:disable-next-line: max-line-length
      description: 'Lorem ipsum dolor sit amet, consetetur sadipscin elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing ',
      imageUrls: ['assets/Paintings/FlyingFreeFramed.png'],
      price: 5000,
      detail: 'Canvas | 120cm x 68cm | Charcoal'
    },
  ];
  constructor() { }

  ngOnInit() {
  }

}
