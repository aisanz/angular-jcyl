import { Component, Input, OnInit } from '@angular/core';
import {Centro} from "../centros/centros.component"

@Component({
  selector: 'app-centro',
  template: `
     {{centro?.nombre}}
   `,
  styleUrls: ['./centro.component.css']
})
export class CentroComponent implements OnInit {


  constructor() { }

  ngOnInit(): void {
  }

  @Input() centro?: Centro;

}
