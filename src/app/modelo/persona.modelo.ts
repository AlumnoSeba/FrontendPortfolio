export class persona{
    id?: number;
    nombre: string;
    apellido: string;
    titulo: string;
    descripcion: string;
    imag: string;
   

    constructor(nombre: string, apellido: string, titulo: string, descripcion: string, imag: string){
    
        this.nombre=nombre;
        this.apellido=apellido;
        this.titulo=titulo;
        this.descripcion= descripcion;
        this.imag= imag;
    }
}