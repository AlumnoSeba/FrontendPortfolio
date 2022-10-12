import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Experiencia } from 'src/app/modelo/experiencia';
import { SExperienciaService } from 'src/app/servicios/s-experiencia.service';

@Component({
  selector: 'app-nuevaexperiencia',
  templateUrl: './nuevaexperiencia.component.html',
  styleUrls: ['./nuevaexperiencia.component.css']
})
export class NuevaexperienciaComponent implements OnInit {
  empresa!: string;
  actividad!: string;
  periodo!: string;
  puesto!: string;
  image!: string;

  constructor(private serviExpe:SExperienciaService, private router:Router) { }

  ngOnInit(): void {
  }

  crear():void{
    const expe=new Experiencia(this.empresa, this.actividad, this.periodo, this.puesto, this.image);
   this.serviExpe.guardar(expe).subscribe(data=>{
     alert("Experiencia agregada con exito!!!");
     this.router.navigate(['portfolioweb']);
   })
  }

}
