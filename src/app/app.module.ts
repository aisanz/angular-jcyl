import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SolicitudComponent } from './solicitud/solicitud.component';
import { CentroComponent } from './centro/centro.component';
import { SelectorCentroComponent } from './selector-centro/selector-centro.component';
import { CentrosComponent } from './centros/centros.component';
import { FilaSolicitudComponent } from './fila-solicitud/fila-solicitud.component';
import {HttpClientModule} from '@angular/common/http';
import { RouterModule } from '@angular/router';

let routes = [{path:'', component:SolicitudComponent},
              {path:'solicitud',component:CentrosComponent}]

@NgModule({
  declarations: [
    AppComponent,
    SolicitudComponent,
    CentroComponent,
    SelectorCentroComponent,
    CentrosComponent,
    FilaSolicitudComponent
  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
