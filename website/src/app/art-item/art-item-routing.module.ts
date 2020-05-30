import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { ArtItemComponent } from './art-item.component';


const routes: Routes = [{
  path: '',
  component: ArtItemComponent
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})

export class ArtItemRoutingModule {}
