import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';

import {EntradaComponent} from  '../../entrada/entrada.component'

@Component({
  selector: 'app-navegacion',
  templateUrl: './navegacion.component.html',
  styleUrls: ['./navegacion.component.css']
})
export class NavegacionComponent implements OnInit {

  entradaComponent:EntradaComponent;
  constructor(private router: Router , private activedRoute: ActivatedRoute,  ) { }

  ngOnInit(): void {
  }


  refrescar(){
    this.entradaComponent.filterA
  }

}
