import { Component, Input, Output, OnInit, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-fila-solicitud',
  template: `
     {{solicitud.nombre}} {{solicitud.apellidos}} <button (click)="eliminar(solicitud)">Eliminar</button>
  `,
  styleUrls: ['./fila-solicitud.component.css']
})
export class FilaSolicitudComponent implements OnInit {

  constructor() { }
  @Input()
     solicitud:any;

  @Output()
     solicitudEliminada = new EventEmitter();

  ngOnInit(): void {
  }
  eliminar(solicitud:any) {
    this.solicitudEliminada.emit(solicitud);
  }

}
