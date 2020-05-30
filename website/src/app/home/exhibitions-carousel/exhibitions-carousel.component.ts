import { Component, ViewChild } from '@angular/core';
import { NgxGlideComponent } from 'ngx-glide';

@Component({
  selector: 'app-exhibitions-carousel',
  templateUrl: 'exhibitions-carousel.component.html',
  styleUrls: ['exhibitions-carousel.component.scss']

})
export class ExhibitionCarouselComponent {
  exhibitions = [
    {
      img: 'assets/HomeAssets/dutch-church.png',
      title: 'Dutch Church',
      location: 'Franschhoek',
      date: ['24', 'Oct']
    },
    {
      img: 'assets/HomeAssets/dutch-church.png',
      title: 'Dutch Church',
      location: 'Franschhoek',
      date: ['24', 'Oct']
    },
    {
      img: 'assets/HomeAssets/dutch-church.png',
      title: 'Dutch Church',
      location: 'Franschhoek',
      date: ['24', 'Oct']
    },
  ];
  @ViewChild(NgxGlideComponent, { static: false }) ngxGlide: NgxGlideComponent;

  constructor(){
  }

}
