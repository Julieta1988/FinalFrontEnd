export class Formacion {
    id!: number;
    descripcion: string;
    institucion: string;
    titulo: string;

    constructor (descripcion: string, institucion: string, titulo: string){
        this.descripcion = descripcion;
        this.institucion = institucion;
        this.titulo = titulo;
    }
}