import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpClientModule} from '@angular/common/http';
import {FormsModule} from '@angular/forms';
import { CommonModule } from "@angular/common";

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavegacionComponent } from './mis_components/componentes/navegacion/navegacion.component';
import {HeroesService} from './mis_components/servicios/heroes.service';
import { InicioComponent } from './mis_components/componentes/inicio/inicio.component';
import { Componente1Component } from './mis_components/componentes/componente1/componente1.component';



@NgModule({
  declarations: [
    AppComponent,
    NavegacionComponent,   
    Componente1Component,
    InicioComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    
    FormsModule,
    CommonModule,    
  ],
  providers: [
    HeroesService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
