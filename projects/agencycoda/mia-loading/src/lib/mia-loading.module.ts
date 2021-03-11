import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { SquaresComponent } from './components/squares/squares.component';



@NgModule({
  declarations: [SquaresComponent],
  imports: [
    CommonModule
  ],
  exports: [SquaresComponent]
})
export class MiaLoadingModule { }
