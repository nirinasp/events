import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SpeakersPageRoutingModule } from './speakers-routing.module';

import { SpeakersPage } from './speakers.page';
import { CustomCardComponent } from '../components/custom-card/custom-card.component';
import { ContactFormComponent } from '../components/contact-form/contact-form.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SpeakersPageRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  declarations: [SpeakersPage, CustomCardComponent, ContactFormComponent]
})
export class SpeakersPageModule {}
