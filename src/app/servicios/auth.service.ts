import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { JwtDto } from '../modelo/jwt_dto';
import { LoginUsuario } from '../modelo/login_usuario';
import { NuevoUsuario } from '../modelo/nuevo_usuario';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  url='https://backendseba.herokuapp.com/';
  

  constructor(private httpClient:HttpClient) { }

  public nuevo(nuevoUsuario:NuevoUsuario):Observable<any>{
    return this.httpClient.post<any>(this.url+'auth/nuevoUsuario', nuevoUsuario);
  }

  public login(loginUsuario:LoginUsuario):Observable<JwtDto>{
    return this.httpClient.post<JwtDto>(this.url+'auth/login', loginUsuario);
  }
}
