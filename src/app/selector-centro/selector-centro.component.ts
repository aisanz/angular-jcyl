import { Component, OnInit } from '@angular/core';
import {Centro} from "../centros/centros.component";

@Component({
  selector: 'app-selector-centro',
  templateUrl: './selector-centro.component.html',
  styleUrls: ['./selector-centro.component.css']
})
export class SelectorCentroComponent implements OnInit {

  centros: Centro[] = [{nombre:"CEIP Antonio García Quintana"}, {nombre:"Huelgas"}, {nombre:"San José"}]
  centrosFiltrados: Centro[] = []
  centroSeleccionado?:Centro

  constructor() { }

  ngOnInit(): void {
    this.centrosFiltrados = this.centros;
  }

  buscarCentro ($event:KeyboardEvent) {
    let element=$event.target as HTMLInputElement
    console.log("escrito ",element.value);
    this.centrosFiltrados = this.centros.filter(centro => centro.nombre?.toLocaleLowerCase()?.includes(element.value.toLocaleLowerCase()));
  }

  seleccionarCentro(centro:Centro) {
    this.centroSeleccionado= centro;
  }

}
