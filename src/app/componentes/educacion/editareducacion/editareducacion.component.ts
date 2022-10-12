import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Educacion } from 'src/app/modelo/educacion';
import { EducacionService } from 'src/app/servicios/educacion.service';

@Component({
  selector: 'app-editareducacion',
  templateUrl: './editareducacion.component.html',
  styleUrls: ['./editareducacion.component.css']
})
export class EditareducacionComponent implements OnInit {
  educa: Educacion=null;
  constructor(private sEducacion:EducacionService, private router:Router, private actRoute:ActivatedRoute) { }

  ngOnInit(): void {
    const id=this.actRoute.snapshot.params['id'];
    this.sEducacion.buscar(id).subscribe(data=>{
    this.educa=data;
  });
}

  update(){
    
    this.sEducacion.actualizar(this.educa.id, this.educa).subscribe(data=>{
      this.router.navigate(['portfolioweb']);
    })
  }

}
