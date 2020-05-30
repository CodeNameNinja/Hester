import { RouterModule, Routes } from '@angular/router';
import { GalleryComponent } from './gallery.component';
import { NgModule } from '@angular/core';
import { PaintingDetailsComponent } from './painting-details/painting-details.component';

const routes: Routes = [
  {
    path: '',
    component: GalleryComponent
  },
  {
    path: ':id',
    component: PaintingDetailsComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class GalleryPageRoutingModule {}
