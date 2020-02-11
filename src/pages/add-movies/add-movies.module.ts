import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { AddMoviesPage } from './add-movies';

@NgModule({
  declarations: [
    AddMoviesPage,
  ],
  imports: [
    IonicPageModule.forChild(AddMoviesPage),
  ],
})
export class AddMoviesPageModule {}
