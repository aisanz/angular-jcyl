import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SolicitudComponent } from './solicitud/solicitud.component';
import { CentroComponent } from './centro/centro.component';
import { CentrosComponent } from './centros/centros.component';
import {HttpClientModule} from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { SolicitudModuleModule } from './solicitud-module/solicitud-module.module';

let routes = [{path:'', component:SolicitudComponent},
              {path:'centros',component:CentrosComponent}]

@NgModule({
  declarations: [
    AppComponent,
    CentroComponent,
    CentrosComponent
  ],
  imports: [
    SolicitudModuleModule,
    HttpClientModule,
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
