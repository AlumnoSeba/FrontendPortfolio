import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Mensajes } from '../modelo/mensajes';

@Injectable({
  providedIn: 'root'
})
export class MensajeService {
  url='https://backendseba.herokuapp.com/';
  constructor(private http:HttpClient) { }

  public lista():Observable<Mensajes[]>{
    return this.http.get<Mensajes[]>(this.url+'personas/verMensajes');
  }

  public guardar(msj:Mensajes):Observable<Mensajes>{
    return this.http.post<Mensajes>(this.url+'personas/guardarMensaje/', msj);
  }

  public borrar(id: number):Observable<Mensajes>{
    return this.http.delete<Mensajes>(this.url+'personas/borrarMsj/'+id);
  }
}
