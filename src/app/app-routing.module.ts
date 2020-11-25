import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


import { Componente1Component } from './mis_components/componentes/componente1/componente1.component';


const routes: Routes = [

{path: '',
redirectTo: '/inicio',
pathMatch: 'full'
},
{
  path: 'inicio',
  loadChildren: () => import('src/app/mis_components/entrada/entrada.module')
    .then(mod => mod.EntradaModule)
},
{
 path:'inicio/componente1/:id',
 component:Componente1Component
}



];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    initialNavigation: 'enabled'
})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
