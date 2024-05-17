import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AnimeComponent } from './anime.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [AnimeComponent],
  exports: [AnimeComponent]
})
export class AnimeModule { }
