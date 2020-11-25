import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {FormsModule} from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';


import { EntradaRoutingModule } from './entrada-routing.module';
import { EntradaComponent } from './entrada.component';
import {EntradaService} from './entrada.service';

@NgModule({
  
  imports: [
    CommonModule,    
    FormsModule,
    EntradaRoutingModule,
    ReactiveFormsModule
  ],
  exports: [
    EntradaComponent
  ],
  declarations: [
    EntradaComponent
  ],
  providers: [EntradaService],
})
export class EntradaModule { }

