import { Component, OnInit } from '@angular/core';
import { Experiencia } from 'src/app/modelo/experiencia';
import { SExperienciaService } from 'src/app/servicios/s-experiencia.service';
import { TokenService } from 'src/app/servicios/token.service';

@Component({
  selector: 'app-experiencia',
  templateUrl: './experiencia.component.html',
  styleUrls: ['./experiencia.component.css']
})
export class ExperienciaComponent implements OnInit {
  
   experiencia: Experiencia[] =[];

  constructor(public sExperiencia:SExperienciaService, private tokenService:TokenService) { }
  empresa!: string;
  actividad!: string;
  periodo!: string;
  puesto!: string;
  image!: string;

  
  islogged=false;
  ngOnInit(): void {
    this.verExperiencias();
    if(this.tokenService.getToken()){
      this.islogged=true;
    }else{
      this.islogged=false;
    }
  }

 

  verExperiencias():void{
    this.sExperiencia.lista().subscribe(data => {this.experiencia = data})
  }

  borrar(id:number){
    this.sExperiencia.borrar(id).subscribe(data=>{
      this.verExperiencias();
    })
  }

  crear():void{
    const expe=new Experiencia(this.empresa, this.actividad, this.periodo, this.puesto, this.image);
   this.sExperiencia.guardar(expe).subscribe(data=>{
     alert("Experiencia agregada con exito!!!");
     this.verExperiencias();
   })
  }
  
  expeL=new Experiencia(this.empresa, this.actividad, this.periodo, this.puesto, this.image);

  buscar(id: number){
    this.sExperiencia.buscar(id).subscribe(data=>{
      this.expeL=data;
    })
  }
  update(){
    this.sExperiencia.actualizar(this.expeL.id, this.expeL).subscribe(data=>{
      this.verExperiencias();
    })
  }

}
