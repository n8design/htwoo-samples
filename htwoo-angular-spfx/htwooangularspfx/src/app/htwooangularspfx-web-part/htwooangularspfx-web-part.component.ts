import { Component, Input, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-htwooangularspfx-web-part',
  templateUrl: './htwooangularspfx-web-part.component.html',
  styleUrls: ['./htwooangularspfx-web-part.component.scss'],
  encapsulation: ViewEncapsulation.Emulated
})
export class HtwooangularspfxWebPartComponent implements OnInit {
  @Input() description: string;

  constructor() { }

  ngOnInit() {
  }

}
