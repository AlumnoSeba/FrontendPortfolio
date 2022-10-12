export class Educacion{
    id?: number;
    nombreInstitucion: string;
    direccion: string;
    titulo: string;
    periodo: string;
    imag: string;

    constructor(nombreInstitucion: string, direccion: string, titulo: string, periodo: string, imag: string){
        this.nombreInstitucion=nombreInstitucion;
        this.direccion=direccion;
        this.titulo= titulo;
        this.periodo= periodo;
        this.imag= imag;
    }
}