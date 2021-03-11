import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'mia-loading-squares',
  templateUrl: './squares.component.html',
  styleUrls: ['./squares.component.scss']
})
export class SquaresComponent implements OnInit {

  @Input() isFullPage:boolean = false;
  @Input() color: string = '#00C1D4';

  constructor() { }

  ngOnInit(): void {
  }

}
