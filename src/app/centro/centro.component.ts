import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-centro',
  template: `<h2>Centros</h2>
             <p>Nombre Centro: {{centro.nombre}}</p>
             <p>Dirección Centro: {{centro.direccion}}</p>`,
  styleUrls: ['./centro.component.css']
})
export class CentroComponent implements OnInit {

  centro = {nombre:"CEIP Antonio García Quintana", direccion:"Plaza España"};

  constructor() { }

  ngOnInit(): void {
  }

  @Input() centroSolicitud: any;

}
