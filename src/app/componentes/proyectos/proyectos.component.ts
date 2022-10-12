import { Component, OnInit } from '@angular/core';
import { Proyectos } from 'src/app/modelo/proyectos';
import { ProyectoService } from 'src/app/servicios/proyecto.service';
import { TokenService } from 'src/app/servicios/token.service';

@Component({
  selector: 'app-proyectos',
  templateUrl: './proyectos.component.html',
  styleUrls: ['./proyectos.component.css']
})
export class ProyectosComponent implements OnInit {
 
  proyec:Proyectos[]=[];
  
  constructor(private serviPro:ProyectoService, private token:TokenService) { }
  nombre!: string;
  descripcion!: string;
  periodo!: string;
  image!: string;
  
  logueado=false;
  ngOnInit(): void {
    this.verProyectos();
    if(this.token.getToken()){
      this.logueado=true;
    }else{
      this.logueado=false;
    }
  }

  verProyectos(){
    this.serviPro.lista().subscribe(data => {
      this.proyec=data;
    })  
  }

  crear(){
    const proy=new Proyectos(this.nombre, this.descripcion, this.periodo, this.image);
    this.serviPro.guardar(proy).subscribe(data=>{
      alert("Agregado con exito!!!");
      this.verProyectos();
    })
  }
  
  pro=new Proyectos(this.nombre, this.descripcion, this.periodo, this.image);
  buscar(id: number){
    this.serviPro.buscar(id).subscribe(data=>{
      this.pro=data;
   })
  }
  
  
  update(){
    this.serviPro.actualizar(this.pro.id, this.pro).subscribe(data=>{
      alert("Proyecto actualizado!!");
      this.verProyectos();
    })
  }

  borrar(id: number){
    this.serviPro.borrar(id).subscribe(data=>{
      this.verProyectos();
    })
  }

}
