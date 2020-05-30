import { Component, OnInit } from '@angular/core';
import { Painting } from '../models/Paintings'
import { HttpServiceService } from '../services/http-service.service';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.scss']
})
export class GalleryComponent implements OnInit {
  paintings: Painting[]
  constructor(private httpService: HttpServiceService) { }

  ngOnInit() {
    this.paintings = this.httpService.paintings;
  }

}
