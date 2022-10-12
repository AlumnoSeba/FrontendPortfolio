export class Experiencia {
    id?: number;
    nombreEmpresa: string;
    periodo: string;
    actividad: string;
    puesto: string;
    image: string;

    constructor(nombreEmpresa:string, periodo: string, actividad: string, puesto: string, image: string){
            this.nombreEmpresa=nombreEmpresa;
            this.periodo=periodo;
            this.actividad=actividad;
            this.puesto=puesto;
            this.image= image;
    }
}
