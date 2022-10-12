import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Educacion } from '../modelo/educacion';

@Injectable({
  providedIn: 'root'
})
export class EducacionService {
  url='https://backendseba.herokuapp.com/';
  constructor(private http:HttpClient) { }

  public lista():Observable<Educacion[]>{
      return this.http.get<Educacion[]>(this.url+'personas/verEducacion');
  }

  public buscar(id: number):Observable<Educacion>{
    return this.http.get<Educacion>(this.url+'personas/buscarEducacion/'+id);
  }
  
  public guardar(edu:Educacion):Observable<Educacion>{
    return this.http.post<Educacion>(this.url+'personas/guardarEducacion/', edu);
  }

  public actualizar(id: number, edu:Educacion):Observable<Educacion>{
    return this.http.put<Educacion>(this.url+'personas/actualizarEdu/'+edu.id, edu);
  }

  public borrar(id: number):Observable<Educacion>{
    return this.http.delete<Educacion>(this.url+'personas/borrarEdu/'+id);
  }  
}
