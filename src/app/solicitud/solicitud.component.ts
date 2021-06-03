import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-solicitud',
  templateUrl: './solicitud.component.html',
  styleUrls: ['./solicitud.component.css']
})
export class SolicitudComponent implements OnInit {

  solicitud = {nombre: "", apellidos:""}
  solicitudes = [{nombre: "Ana", apellidos:"Sanz"},{nombre: "Luis", apellidos:"Sastre"}]

  constructor() { 
    //setInterval(() => {this.solicitud.nombre = '' + Math.random();},2000)
  }

  

  ngOnInit(): void {
  }

  enviar() {
    console.log('Enviado');
    //this.solicitud.apellidos = "enviado";
  }

  nombre($event:KeyboardEvent) {
    const element=$event.target as HTMLInputElement
    this.solicitud.nombre = element.value;
  }

  apellidos($event:KeyboardEvent) {
    const element=$event.target as HTMLInputElement
    this.solicitud.apellidos = element.value;
  }

  isDisabled() {
    return (this.solicitud.apellidos.length < 3 || this.solicitud.nombre.length < 3);
  }
  
}
