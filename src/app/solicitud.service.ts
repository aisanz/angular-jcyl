import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SolicitudService {

  constructor() { }

  getSolicitudes () {
    return [{nombre: "Ana", apellidos:"Sanz"},{nombre: "Luis", apellidos:"Sastre"}];
  }
}
