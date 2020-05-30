import { Injectable } from '@angular/core';
import { Painting } from '../models/Paintings';

@Injectable({
  providedIn: 'root'
})
export class HttpServiceService {
  paintings: Painting[] = [
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
    {
      id: '4',
      category: 'canvas',
      title: 'Clown',
      // tslint:disable-next-line: max-line-length
      description: 'Lorem ipsum dolor sit amet, consetetur sadipscin elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing ',
      imageUrls: ['assets/Paintings/Clown.png'],
      price: 5000,
      detail: 'Canvas | 120cm x 68cm | Charcoal'
    },
    {
      id: '5',
      category: 'canvas',
      title: 'Painting#1',
      // tslint:disable-next-line: max-line-length
      description: 'Lorem ipsum dolor sit amet, consetetur sadipscin elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing ',
      imageUrls: ['assets/Paintings/FallingWater.png'],
      price: 5000,
      detail: 'Canvas | 120cm x 68cm | Charcoal'
    },
    {
      id: '6',
      category: 'canvas',
      title: 'Painting#1',
      // tslint:disable-next-line: max-line-length
      description: 'Lorem ipsum dolor sit amet, consetetur sadipscin elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing ',
      imageUrls: ['assets/Paintings/FromDustToWater.png'],
      price: 5000,
      detail: 'Canvas | 120cm x 68cm | Charcoal'
    },
    {
      id: '7',
      category: 'canvas',
      title: 'Painting#1',
      // tslint:disable-next-line: max-line-length
      description: 'Lorem ipsum dolor sit amet, consetetur sadipscin elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing ',
      imageUrls: ['assets/Paintings/Model.png'],
      price: 5000,
      detail: 'Canvas | 120cm x 68cm | Charcoal'
    },
    {
      id: '8',
      category: 'canvas',
      title: 'Painting#1',
      // tslint:disable-next-line: max-line-length
      description: 'Lorem ipsum dolor sit amet, consetetur sadipscin elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing ',
      imageUrls: ['assets/Paintings/RustBoyFramed.png'],
      price: 5000,
      detail: 'Canvas | 120cm x 68cm | Charcoal'
    },
    {
      id: '9',
      category: 'canvas',
      title: 'Painting#1',
      // tslint:disable-next-line: max-line-length
      description: 'Lorem ipsum dolor sit amet, consetetur sadipscin elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing ',
      imageUrls: ['assets/Paintings/Tayyholdingbunny.png'],
      price: 5000,
      detail: 'Canvas | 120cm x 68cm | Charcoal'
    },
  ];
  constructor() { }
}
