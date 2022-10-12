import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EditareducacionComponent } from './componentes/educacion/editareducacion/editareducacion.component';
import { NuevaeducacionComponent } from './componentes/educacion/nuevaeducacion/nuevaeducacion.component';
import { EditarexperienciaComponent } from './componentes/experiencia/editarexperiencia/editarexperiencia.component';
import { NuevaexperienciaComponent } from './componentes/experiencia/nuevaexperiencia/nuevaexperiencia.component';



import { IniciarSesionComponent } from './componentes/iniciar-sesion/iniciar-sesion.component';
import { PortfoliowebComponent } from './componentes/portfolioweb/portfolioweb.component';
import { EditarproyectoComponent } from './componentes/proyectos/editarproyecto/editarproyecto.component';
import { NuevoproyectoComponent } from './componentes/proyectos/nuevoproyecto/nuevoproyecto.component';

const routes: Routes = [
  {path:'portfolioweb', component:PortfoliowebComponent},
  {path:'iniciar-sesion', component:IniciarSesionComponent},
  {path:'nuevaExpe', component:NuevaexperienciaComponent},
  {path:'editarExpe/:id', component:EditarexperienciaComponent},
  {path:'nuevaEdu', component:NuevaeducacionComponent},
  {path:'editarEdu/:id', component:EditareducacionComponent},
  {path:'nuevoPro', component:NuevoproyectoComponent},
  {path:'editarPro/:id', component:EditarproyectoComponent},
  {path:'',redirectTo:'portfolioweb',pathMatch:'full'}
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
