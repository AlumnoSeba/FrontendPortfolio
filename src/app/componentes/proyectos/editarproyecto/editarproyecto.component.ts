import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Proyectos } from 'src/app/modelo/proyectos';
import { ProyectoService } from 'src/app/servicios/proyecto.service';

@Component({
  selector: 'app-editarproyecto',
  templateUrl: './editarproyecto.component.html',
  styleUrls: ['./editarproyecto.component.css']
})
export class EditarproyectoComponent implements OnInit {
  proyec:Proyectos=null;
  constructor(private serviPro:ProyectoService, private router:Router, private actRou:ActivatedRoute) { }

  ngOnInit(): void {
    const id=this.actRou.snapshot.params['id'];
    this.serviPro.buscar(id).subscribe(data=>{
       this.proyec=data;
    })
  }

  actualizar(){
    this.serviPro.actualizar(this.proyec.id, this.proyec).subscribe(data=>{
      alert("Proyecto actualizado!!");
      this.router.navigate(['portfolioweb']);
    })
  }

}
