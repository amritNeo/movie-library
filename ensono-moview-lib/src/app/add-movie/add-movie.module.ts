import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AddMovieRoutingModule } from './add-movie-routing.module';
import { AddMovieComponent } from './add-movie.component';
import {ReactiveFormsModule} from '@angular/forms';


@NgModule({
  declarations: [AddMovieComponent],
  imports: [
    CommonModule,
    AddMovieRoutingModule,
    ReactiveFormsModule
  ]
})
export class AddMovieModule { }
