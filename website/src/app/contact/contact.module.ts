import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContactComponent } from './contact.component';
import { ContactPageRoutingModule } from './contact-routing.module';
import {
  MatFormFieldModule,
  MatInputModule
} from '@angular/material';
import { FormsModule } from '@angular/forms';
import { HttpClientModule} from '@angular/common/http';
@NgModule({
  imports: [
    CommonModule,
    ContactPageRoutingModule,
    MatFormFieldModule,
    MatInputModule,
    FormsModule,
    HttpClientModule
  ],
  declarations: [
    ContactComponent
  ]
})

export class ContactPageModule {}
