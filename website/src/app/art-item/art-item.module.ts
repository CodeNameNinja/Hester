import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {
  MatProgressSpinnerModule,
  MatSelectModule
} from '@angular/material';
import { FormsModule } from '@angular/forms';
import { ArtItemComponent } from './art-item.component';
import { ArtItemRoutingModule } from './art-item-routing.module';

@NgModule({
  imports: [
    CommonModule,
    MatProgressSpinnerModule,
    MatSelectModule,
    FormsModule,
    ArtItemRoutingModule
  ],
  declarations: [ArtItemComponent],
  exports: [
    ArtItemComponent
  ]

})
export class ArtItemModule {}
