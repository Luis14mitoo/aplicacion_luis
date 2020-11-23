import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';


import {HeroesService} from '../../servicios/heroes.service';
import{Heroes} from '../../interfaces/Heroes'




@Component({
  selector: 'app-componente1',
  templateUrl: './componente1.component.html',
  styleUrls: ['./componente1.component.css']
})
export class Componente1Component implements OnInit {
  respuesta:any;
  objeto:Heroes;


  constructor(private heroesService:HeroesService, private router: Router , private activedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    const params = this.activedRoute.snapshot.params; 
    console.log('params.id',params.id)  
    this.oneHeroe(params.id)
  }

  oneHeroe(id: any){
    this.heroesService.heroe(id).subscribe(
      res =>{
        this.respuesta=res;
        this.objeto=this.respuesta;         
        console.log('RESPUESTA ',this.objeto.images.lg)
      },
      err => console.error(err)

    );
  }





















}