import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {SolicitudComponent} from '../solicitud/solicitud.component';
import {FilaSolicitudComponent} from '../fila-solicitud/fila-solicitud.component';
import {SelectorCentroComponent} from '../selector-centro/selector-centro.component';

@NgModule({
  declarations: [SolicitudComponent,
    FilaSolicitudComponent,
    SelectorCentroComponent],  
  imports: [
    CommonModule
  ]
})
export class SolicitudModuleModule { }
