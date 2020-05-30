import { Component, OnInit, ViewChild } from '@angular/core';
import { HttpServiceService } from '../services/http-service.service';
import { Painting } from '../models/Paintings';
import { ActivatedRoute, Params } from '@angular/router';
import { NgForm } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {
  // @ViewChild('f', { static: false }) contactForm: NgForm;
  painting: Painting;
  id: string;
  EmailStatus = false;
  constructor(
    private httpService: HttpServiceService,
    private route: ActivatedRoute,
    private http: HttpClient
  ) { }

  ngOnInit() {
    this.route.params.subscribe((params: Params) => {
      if(params['id']){
        this.id = params['id'];
        const painting =  this.httpService.paintings.filter((painting: Painting) => {
          return painting.id === this.id;
        })
        this.painting = painting[0];

      }else{
        const randomId = Math.floor(Math.random() * (9 - 1)).toString();
        this.painting = this.httpService.paintings.filter(painting => {
          return painting.id === randomId;
        })[0];
        if (!this.painting) {
          this.painting = this.httpService.paintings[0];
        }
      }
    });


  }

  onSubmit(form: NgForm) {
    this.http.post(`${environment.apiUrl}/email`,form.value).subscribe(response => {
      form.resetForm();
      this.EmailStatus = true;
    });
  }

}
