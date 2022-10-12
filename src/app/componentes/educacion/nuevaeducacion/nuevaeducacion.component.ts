import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Educacion } from 'src/app/modelo/educacion';
import { EducacionService } from 'src/app/servicios/educacion.service';

@Component({
  selector: 'app-nuevaeducacion',
  templateUrl: './nuevaeducacion.component.html',
  styleUrls: ['./nuevaeducacion.component.css']
})
export class NuevaeducacionComponent implements OnInit {

  constructor(private sEducacion:EducacionService, private router:Router) { }
  institucion!: string;
  direccion!: string;
  titulo!: string;
  periodo!: string;
  imag!: string;

  ngOnInit(): void {
  }

  crear(){
    const edu=new Educacion(this.institucion, this.direccion, this.titulo, this.periodo, this.imag);
    return this.sEducacion.guardar(edu).subscribe(data=>{
      alert("Educacion creada con exito!!!");
      this.router.navigate(['portfolioweb']);
    })
    
    
  }

}
