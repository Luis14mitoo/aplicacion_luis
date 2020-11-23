import { Component, OnInit, HostBinding } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';




import {HeroesService} from '../../servicios/heroes.service';
import{Heroes} from '../../interfaces/Heroes'




let ArrayH = new Array(20);



@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css']
})
export class InicioComponent implements OnInit {

  respuesta:any=[];
  contador1:number;
  heroes:Heroes[];
  heroe:Heroes[];
  heroe1:string;
  heroes2:Heroes[];  
  filterPost:any;
  
  
 

  @HostBinding('class') clases='row';


  constructor(private heroesService:HeroesService ,private router: Router , private activedRoute: ActivatedRoute) { }

  ngOnInit(){
    this.listHeroes();
   
   

        }


        listHeroes(){

          this.respuesta=this.heroesService.listHeroe().subscribe(
            res=>{
              this.respuesta=res;
              this.heroe= this.respuesta
              console.log('this.respuesta',this.respuesta);
              for(var i=0;i<20;i++){     
                this.contador1=this.aleatorio(0,563)        
                  ArrayH[i] = this.respuesta[this.contador1]; 
                  } 
                  this.heroes=ArrayH;                                
                                      
                 },
            err=>console.error(err)
          )  
        
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

          if(this.heroes2.length==0){alert("No encontramos ese nombre, prueba con otro"),this.heroe1=''}       

          return  this.heroes2;          
          
        }
        
      


        aleatorio(inferior :number, superior: number) {
          var numPosibilidades = superior - inferior;
          var aleatorio = Math.random() * (numPosibilidades + 1);
          aleatorio = Math.floor(aleatorio);
          aleatorio = Math.floor(aleatorio);
          return aleatorio;
        
        }








}
