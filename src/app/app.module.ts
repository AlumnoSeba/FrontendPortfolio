import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './componentes/header/header.component';
import { AcercadeComponent } from './componentes/acercade/acercade.component';
import { ExperienciaComponent } from './componentes/experiencia/experiencia.component';
import { EducacionComponent } from './componentes/educacion/educacion.component';
import { HardysoftskillsComponent } from './componentes/hardysoftskills/hardysoftskills.component';
import { ProyectosComponent } from './componentes/proyectos/proyectos.component';
import { HttpClientModule } from '@angular/common/http';
import { IniciarSesionComponent } from './componentes/iniciar-sesion/iniciar-sesion.component';
import { PortfoliowebComponent } from './componentes/portfolioweb/portfolioweb.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NuevaexperienciaComponent } from './componentes/experiencia/nuevaexperiencia/nuevaexperiencia.component';
import { SExperienciaService } from 'src/app/servicios/s-experiencia.service';
import { NuevaeducacionComponent } from './componentes/educacion/nuevaeducacion/nuevaeducacion.component';
import { EditareducacionComponent } from './componentes/educacion/editareducacion/editareducacion.component';
import { EditarexperienciaComponent } from './componentes/experiencia/editarexperiencia/editarexperiencia.component';
import { EducacionService } from './servicios/educacion.service';
import { NuevoproyectoComponent } from './componentes/proyectos/nuevoproyecto/nuevoproyecto.component';
import { EditarproyectoComponent } from './componentes/proyectos/editarproyecto/editarproyecto.component';
import { ProyectoService } from './servicios/proyecto.service';
import { NgCircleProgressModule } from 'ng-circle-progress';
import { MensajesComponent } from './componentes/mensajes/mensajes.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    AcercadeComponent,
    ExperienciaComponent,
    EducacionComponent,
    HardysoftskillsComponent,
    ProyectosComponent,
    IniciarSesionComponent,
    PortfoliowebComponent,
    NuevaexperienciaComponent,
    NuevaeducacionComponent,
    EditareducacionComponent,
    EditarexperienciaComponent,
    NuevoproyectoComponent,
    EditarproyectoComponent,
    MensajesComponent
    ],

  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule,
    NgCircleProgressModule.forRoot({})
  ],

  providers: [SExperienciaService, EducacionService, ProyectoService],
  bootstrap: [AppComponent]
})
export class AppModule { }
