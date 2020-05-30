import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AboutComponent } from './about.component';
import { AboutPageRoutingModule } from './about.routing.module';
import {
  MatCardModule
} from '@angular/material'

@NgModule({
  imports: [
    CommonModule,
    AboutPageRoutingModule,
    MatCardModule
  ],
  declarations: [
    AboutComponent
  ]
})

export class AboutPageModule {}
