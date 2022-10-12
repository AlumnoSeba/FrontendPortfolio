export class Proyectos{
    id?: number;
    nombreProyecto: string;
    descripcion: string;
    periodo: string;
    image: string;

    constructor(nombreProyecto: string, descripcion: string, periodo: string, image: string){
        this.nombreProyecto=nombreProyecto;
        this.descripcion=descripcion;
        this.periodo= periodo;
        this.image= image;
    }
}