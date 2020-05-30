import { NgModule} from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import {
  MatCardModule,
  MatButtonModule
} from '@angular/material';
import { HomePageRoutingModule } from './home-routing.module';
import { ExhibitionCarouselComponent } from './exhibitions-carousel/exhibitions-carousel.component';
import { ArtItemModule } from '../art-item/art-item.module';
import { NgxGlideModule } from 'ngx-glide';
@NgModule({
 declarations: [
   HomeComponent,
   ExhibitionCarouselComponent
 ],
 imports: [
  MatCardModule,
  MatButtonModule,
  HomePageRoutingModule,
  CommonModule,
  ArtItemModule,
  NgxGlideModule,
 ]
})

export class HomePageModule { }
