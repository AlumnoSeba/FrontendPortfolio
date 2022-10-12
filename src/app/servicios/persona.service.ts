import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { persona } from '../modelo/persona.modelo';


@Injectable({
  providedIn: 'root'
})
export class PersonaService {
  url='https://backendseba.herokuapp.com/';

  constructor(private http: HttpClient){}

    public datosPersona():Observable<any>{
       return this.http.get<any>(this.url +'personas/perfil');     
    }

    public buscar(id: number):Observable<any>{
      return this.http.get<any>(this.url +'personas/buscarPersona/'+id);
    }

    public guardar(per:persona):Observable<persona>{
      return this.http.post<persona>(this.url +'personas/crear/', per);
    }

    public actualizar(id: number, per:persona):Observable<persona>{
      return this.http.put<persona>(this.url +'personas/editarPersona/'+per.id, per);
    }

    public borrar(id: number):Observable<persona>{
      return this.http.delete<persona>(this.url +'personas/borrarPersona/'+id);
    }  
   
}
