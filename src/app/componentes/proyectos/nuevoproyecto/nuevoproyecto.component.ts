import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Proyectos } from 'src/app/modelo/proyectos';
import { ProyectoService } from 'src/app/servicios/proyecto.service';

@Component({
  selector: 'app-nuevoproyecto',
  templateUrl: './nuevoproyecto.component.html',
  styleUrls: ['./nuevoproyecto.component.css']
})
export class NuevoproyectoComponent implements OnInit {
  nombre!: string;
  descripcion!: string;
  periodo!: string;
  image!: string;

  constructor(private serviPro:ProyectoService, private router:Router) { }

  ngOnInit(): void {
  }

  crear(){
    const pro=new Proyectos(this.nombre, this.descripcion, this.periodo, this.image);
    this.serviPro.guardar(pro).subscribe(data=>{
      alert("Proyecto agregado con exito!!!");
      this.router.navigate(['portfolioweb']);
    })
  }

}
