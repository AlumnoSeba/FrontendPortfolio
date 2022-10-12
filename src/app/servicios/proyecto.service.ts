import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Proyectos } from '../modelo/proyectos';

@Injectable({
  providedIn: 'root'
})
export class ProyectoService {
  url='https://backendseba.herokuapp.com/';

  constructor(private http:HttpClient) { }

  public lista():Observable<Proyectos[]>{
    return this.http.get<Proyectos[]>(this.url+'personas/verProyectos');
  }
  public buscar(id: number):Observable<Proyectos>{
    return this.http.get<Proyectos>(this.url+'personas/buscarPro/'+id);
  }
  public guardar(pro:Proyectos):Observable<Proyectos>{
    return this.http.post<Proyectos>(this.url+'personas/guardarProyectos/', pro);
  }
  public actualizar(id: number, pro:Proyectos):Observable<Proyectos>{
    return this.http.put<Proyectos>(this.url+'personas/actualizarProyectos/'+pro.id, pro);
  }
  public borrar(id: number):Observable<Proyectos>{
    return this.http.delete<Proyectos>(this.url+'personas/borrarProyectos/'+id);
  }

}
