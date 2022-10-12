import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginUsuario } from 'src/app/modelo/login_usuario';
import { AuthService } from 'src/app/servicios/auth.service';
import { TokenService } from 'src/app/servicios/token.service';




@Component({
  selector: 'app-iniciar-sesion',
  templateUrl: './iniciar-sesion.component.html',
  styleUrls: ['./iniciar-sesion.component.css']
})
export class IniciarSesionComponent implements OnInit{
  isLogged=false;
  isLoggedFail=false;
  loginUsuario!:LoginUsuario;
  nombreUsuario!:string;
  password!: string;
  roles:string[]=[];
  errorMsj!: string;

  constructor(private tokenService:TokenService, private authService:AuthService, private router:Router) {
    
   }

  ngOnInit(): void {
    if(this.tokenService.getToken()){
      this.isLogged=true;
      this.isLoggedFail=false;
      this.roles=this.tokenService.getAuthorities();
    }
  }

  onLogin():void{
    this.loginUsuario=new LoginUsuario(this.nombreUsuario, this.password);
    this.authService.login(this.loginUsuario).subscribe(data=>{
      this.isLogged=true;
      this.isLoggedFail=false;
      this.tokenService.setToken(data.token);
      this.tokenService.setUsername(data.nombreUsuario);
      this.tokenService.setAuthorities(data.authorities);
      this.roles=data.authorities;
      this.router.navigate(['portfolioweb']);
    }, err=>{
      this.isLogged=false;
      this.isLoggedFail=true;
      this.errorMsj=err.error.mensaje;
      console.log(this.errorMsj);
    })
  }
}
