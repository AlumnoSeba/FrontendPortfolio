import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Experiencia } from '../modelo/experiencia';

@Injectable({
  providedIn: 'root'
})
export class SExperienciaService {
  url='https://backendseba.herokuapp.com/';

  constructor(private httpClient:HttpClient) { }

  public lista():Observable<Experiencia[]>{
    return this.httpClient.get<Experiencia[]>(this.url+'personas/listaExperiencias');
  }
  public buscar(id: number):Observable<Experiencia>{
    return this.httpClient.get<Experiencia>(this.url+'personas/buscarId/'+id);
  }

  public guardar(expe:Experiencia):Observable<Experiencia>{
     return this.httpClient.post<Experiencia>(this.url+'personas/crearExperiencia', expe);
  }

  public actualizar(id:number, expe:Experiencia):Observable<Experiencia>{
    return this.httpClient.put<Experiencia>(this.url+'personas/actualizarExperiencia/'+expe.id, expe);
  }

  public borrar(id: number):Observable<Experiencia>{
    return this.httpClient.delete<Experiencia>(this.url+'personas/borrarExperiencia/'+id);
  }
}
