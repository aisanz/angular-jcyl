import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-centros',
  template: `<div *ngFor="let centroIterado of centros">
  <app-centro [centro]="centroIterado"></app-centro>
  </div>`,
  styleUrls: ['./centros.component.css']
})
export class CentrosComponent implements OnInit {

  centros: Centro[] = [{nombre:"CEIP Antonio Gercía Quintana"}, {nombre:"Huelgas"}, {nombre:"San José"}]
  constructor() { }

  ngOnInit(): void {
  }


}

export class Centro {
  nombre?:String;
}
