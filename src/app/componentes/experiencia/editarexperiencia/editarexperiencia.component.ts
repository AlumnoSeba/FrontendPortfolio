import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Experiencia } from 'src/app/modelo/experiencia';
import { SExperienciaService } from 'src/app/servicios/s-experiencia.service';

@Component({
  selector: 'app-editarexperiencia',
  templateUrl: './editarexperiencia.component.html',
  styleUrls: ['./editarexperiencia.component.css']
})
export class EditarexperienciaComponent implements OnInit {
  expeL: Experiencia=null; 
  constructor(private serviExpe:SExperienciaService, private router:Router, private actRoute:ActivatedRoute) { }

  ngOnInit(): void {
    const id=this.actRoute.snapshot.params['id'];
    this.serviExpe.buscar(id).subscribe(data=>{
      this.expeL=data;
    })
  }
  update(){
    const id=this.actRoute.snapshot.params['id'];
    this.serviExpe.actualizar(id, this.expeL).subscribe(data=>{
      this.router.navigate(['portfolioweb']);
    })
  }
}
