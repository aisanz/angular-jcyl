import { Component, OnInit } from '@angular/core';
import { SolicitudService } from '../solicitud.service';

@Component({
  selector: 'app-solicitud',
  templateUrl: './solicitud.component.html',
  styleUrls: ['./solicitud.component.css']
})
export class SolicitudComponent implements OnInit {

  solicitud = {nombre: "", apellidos:""}
  solicitudes: any;

  constructor(private solicitudService: SolicitudService) { 
    //setInterval(() => {this.solicitud.nombre = '' + Math.random();},2000)
  //  this.solicitudes = solicitudService.getSolicitudes();
    solicitudService.getSolicitudes().then(
      (data:any) => this.solicitudes = data.items.map((x:any) => x.fields)
    )
  }

  

  ngOnInit(): void {
  }

  enviar() {
    console.log('Enviado');
    this.solicitud.nombre="";
    this.solicitud.apellidos = "";
    
  }

  nombre($event:KeyboardEvent) {
    const element=$event.target as HTMLInputElement
    this.solicitud.nombre = element.value;
  }

  apellidos($event:KeyboardEvent) {
    const element=$event.target as HTMLInputElement
    this.solicitud.apellidos = element.value;
  }

  isDisabled(solicitud: any) {
    return (solicitud.apellidos.length < 2 || solicitud.nombre.length < 2);
  }

  eliminar(solicitud:any) {
    this.solicitudes = this.solicitudes.filter((solicitudExistente: any) => solicitudExistente.nombre != solicitud.nombre)
  }
  
}
