import { Component, OnInit, Input } from '@angular/core';
import { Painting } from 'src/app/models/Paintings';
import { ActivatedRoute, Params } from '@angular/router';
import { HttpServiceService } from 'src/app/services/http-service.service';

@Component({
  selector: 'app-painting-details',
  templateUrl: './painting-details.component.html',
  styleUrls: ['./painting-details.component.scss']
})
export class PaintingDetailsComponent implements OnInit {
  painting: Painting;
  id: string;
  constructor(
    private route: ActivatedRoute,
    private httpService: HttpServiceService
  ) { }

  ngOnInit() {
    this.route.params.subscribe((params: Params) => {
      this.id = params['id'];
      const painting =  this.httpService.paintings.filter((painting: Painting) => {
        return painting.id === this.id;
      })
      // console.log(painting)
      this.painting = painting[0];
    });
  }

}
