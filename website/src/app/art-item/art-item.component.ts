import { Component, OnInit, Input } from '@angular/core';
import { Painting } from '../models/Paintings';

@Component({
  selector: 'app-art-item',
  templateUrl: './art-item.component.html',
  styleUrls: ['./art-item.component.scss']
})
export class ArtItemComponent implements OnInit {
  @Input() painting: Painting;
  constructor() { }

  ngOnInit() {
  }

}
