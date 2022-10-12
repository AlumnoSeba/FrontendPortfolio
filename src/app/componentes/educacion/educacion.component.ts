import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Educacion } from 'src/app/modelo/educacion';
import { EducacionService } from 'src/app/servicios/educacion.service';
import { PortfolioService } from 'src/app/servicios/portfolio.service';
import { TokenService } from 'src/app/servicios/token.service';

@Component({
  selector: 'app-educacion',
  templateUrl: './educacion.component.html',
  styleUrls: ['./educacion.component.css']
})
export class EducacionComponent implements OnInit {
  educacionList:any;
  educacion: Educacion[]=[];
  
  constructor(private datosPortfolio:PortfolioService, private sEducacion:EducacionService, private token:TokenService, private router:Router, private actRoute:ActivatedRoute) { }

  institucion!: string;
  direccion!: string;
  titulo!: string;
  periodo!: string;
  imag!: string;

  logueado=false;
  ngOnInit(): void {
    this.verEducacion()
    if(this.token.getToken()){
      this.logueado=true;
    }else{
      this.logueado=false;
    }
      
    this.datosPortfolio.obtenerDatos().subscribe(datos =>{
      this.educacionList=datos.educacion;
    })

    
  }

  verEducacion():void{
      this.sEducacion.lista().subscribe(data=>{
        this.educacion=data;
      })
  }

  crear(){
    const edu=new Educacion(this.institucion, this.direccion, this.titulo, this.periodo, this.imag);
    return this.sEducacion.guardar(edu).subscribe(data=>{
    alert("Se agregó con exito!!")
    this.verEducacion();
    })
  }
    educa=new Educacion(this.institucion, this.direccion, this.titulo, this.periodo, this.imag);
  buscar(id: number){
    this.sEducacion.buscar(id).subscribe(data=>{
      this.educa=data;
    })
  }
  update(){
    
    this.sEducacion.actualizar(this.educa.id, this.educa).subscribe(data=>{
      alert("Actualizado con exito!!");
      this.verEducacion();
    })
  }


  eliminar(id: number){
    this.sEducacion.borrar(id).subscribe(data=>{
      this.verEducacion();
    })
  }

}
