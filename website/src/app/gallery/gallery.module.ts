import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GalleryPageRoutingModule } from './gallery-routing.module';
import { GalleryComponent } from './gallery.component';
import {
  MatCardModule
} from '@angular/material';
import { ArtItemModule } from '../art-item/art-item.module';
import { PaintingDetailsComponent } from './painting-details/painting-details.component';
@NgModule({
    imports: [
      CommonModule,
      GalleryPageRoutingModule,
      ArtItemModule,
      MatCardModule
    ],
    declarations: [GalleryComponent, PaintingDetailsComponent]
})

export class GalleryPageModule {}
