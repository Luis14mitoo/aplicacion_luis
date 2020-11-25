import { Component, OnInit, HostBinding } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import { isPlatformBrowser } from '@angular/common';
import { TransferState, makeStateKey } from '@angular/platform-browser';
import { PLATFORM_ID, APP_ID, Inject } from '@angular/core';

import {EntradaService} from './entrada.service';
import{Heroes} from '../interfaces/Heroes'

const STATE_KEY_ITEMS = makeStateKey('items');


let ArrayH = new Array(20);
const API_URI='https://akabab.github.io/superhero-api/api/all.json';

@Component({
  selector: 'app-entrada',
  templateUrl: './entrada.component.html',
  styleUrls: ['./entrada.component.css']
})
export class EntradaComponent implements OnInit {

  respuesta:any=[];
  contador1:number;
  heroes:Heroes[];
  heroe:Heroes[];
  heroe1:string;
  heroes2:Heroes[];  
  filterPost:any;
  
  @HostBinding('class') clases='row'; 

 //  items: any;
 items: any = [];
 loaded: boolean;
 constructor(
  private entradaService:EntradaService ,
  private router: Router , private activedRoute: ActivatedRoute,
  private state: TransferState,
  @Inject(PLATFORM_ID) private platformId: object,
  @Inject(APP_ID) private appId: string) { }




  ngOnInit(){
      
      this.getHeroes()
        }


        getHeroes(): void {
          this.loaded = false;
      
          this.respuesta = this.state.get(STATE_KEY_ITEMS, <any> []);
      
          if (this.respuesta.length === 0) {
            this.entradaService.listHeroe(API_URI)
              .subscribe(
                respuesta => {
                  const platform = isPlatformBrowser(this.platformId) ?
                    'in the browser' : 'on the server';
                  console.log(`getUsers : Running ${platform} with appId=${this.appId}`);
                  this.respuesta = respuesta;             
                  this.filterA();
                  this.loaded = true;
                  this.state.set(STATE_KEY_ITEMS, <any> respuesta);
                });
          } else {
            this.loaded = true;
            this.filterA();
          }
                  

        }
      
        resetUsers(): void {
          this.respuesta = null;
          this.loaded = true;
        }

      filterA(){
        console.log('filterA()',this.respuesta);
                  for(var i=0;i<20;i++){     
                  this.contador1=this.aleatorio(0,563)        
                  ArrayH[i] = this.respuesta[this.contador1]; } 
                  this.heroes=ArrayH;
      }


       filter(){       
          const resultPost = [];
          for(const heroe of this.respuesta){
            if(heroe.name.indexOf(this.heroe1) > -1){
              resultPost.push(heroe)
            }
          }
          console.log('resultPost ',resultPost);
          this.heroes2=resultPost;
          if(this.heroes2.length==0){alert("No encontramos ese nombre, prueba con otro"),this.heroe1=''}   return  this.heroes2;    }

        aleatorio(inferior :number, superior: number) {
          var numPosibilidades = superior - inferior;
          var aleatorio = Math.random() * (numPosibilidades + 1);
          aleatorio = Math.floor(aleatorio);
          aleatorio = Math.floor(aleatorio);
          return aleatorio;
        
        }


  

}
