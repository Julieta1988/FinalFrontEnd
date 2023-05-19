export class Persona {
    id!: number;
    nombre: string;
    imagen: string;
    presentacion: string;

    constructor (nombre: string, imagen: string, presentacion: string){
        this.nombre = nombre;
        this.imagen = imagen;
        this.presentacion = presentacion;
    }
}
