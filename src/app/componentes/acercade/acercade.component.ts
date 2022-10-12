import { Component, OnInit } from '@angular/core';
import { persona } from 'src/app/modelo/persona.modelo';
import { PersonaService } from 'src/app/servicios/persona.service';
import { TokenService } from 'src/app/servicios/token.service';




@Component({
  selector: 'app-acercade',
  templateUrl: './acercade.component.html',
  styleUrls: ['./acercade.component.css']
})
export class AcercadeComponent implements OnInit {
  
  persona: persona= new persona( "", "", "", "", "");
  constructor(private persoServi:PersonaService, private token:TokenService) { }
  
  nombre!:string;
  apellido!: string;
  titulo!: string;
  descripcion!: string;
  imag!: string;
   
  logueado=false;
  ngOnInit(): void {
    
    if(this.token.getToken()){
      this.logueado=true;
    }else{
      this.logueado=false;
    }
    this.persoServi.datosPersona().subscribe(data => {this.persona = data; });
  }
  

  crear(){
    const per=new persona(this.nombre, this.apellido, this.titulo, this.descripcion, this.imag);
    return this.persoServi.guardar(per).subscribe(data=>{
    alert("Se agregó con exito!!")
    })
  }
  
  perso=new persona(this.nombre, this.apellido, this.titulo, this.descripcion, this.imag); 
  buscar(id: number){
    this.persoServi.buscar(id).subscribe(data=>{
      this.perso=data;
    })
  }
  
  update(){
    this.persoServi.actualizar(this.perso.id, this.perso).subscribe(data=>{
      alert("Actualizado con exito!!");
    })
  }

  eliminar(id: number){
    this.persoServi.borrar(id).subscribe(data=>{
      alert("Se eliminó correctamente!!");
    })
  }
}
