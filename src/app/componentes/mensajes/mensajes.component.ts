import { Component, OnInit } from '@angular/core';
import { Route, Router } from '@angular/router';
import { Mensajes } from 'src/app/modelo/mensajes';
import { MensajeService } from 'src/app/servicios/mensaje.service';
import { TokenService } from 'src/app/servicios/token.service';

@Component({
  selector: 'app-mensajes',
  templateUrl: './mensajes.component.html',
  styleUrls: ['./mensajes.component.css']
})
export class MensajesComponent implements OnInit {
  mens: Mensajes[]=[]; 

  constructor(private mServi:MensajeService, private token:TokenService, private router:Router) { }

  nombre!: string;
  email!: string;
  asunto!: string;
  mensaje!: string;
  
  logueado=false;
  ngOnInit(): void {
    this.verMensaje();
    if(this.token.getToken()){
      this.logueado=true;
    }else{
      this.logueado=false;
    }
  }

  verMensaje():void{
    this.mServi.lista().subscribe(data=>{
      this.mens=data;
    })
  }

  crear(){
    const msj=new Mensajes(this.nombre, this.email, this.asunto, this.mensaje);
    return this.mServi.guardar(msj).subscribe(data=>{
    alert("Su mensaje fue enviado con exito!!");
    });
    
  }

  eliminar(id: number){
    this.mServi.borrar(id).subscribe(data=>{
      alert("mensaje eliminado!!");
      this.verMensaje();
  })

}

}
