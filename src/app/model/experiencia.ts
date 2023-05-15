export class Experiencia {
    id!: number;
    empresa: string;
    puesto: string;
    duracion: string;
    inicio: string;
    fin: string;

    constructor (empresa: string, puesto: string, duracion: string, inicio: string, fin: string){
        this.empresa = empresa;
        this.puesto = puesto;
        this.duracion = duracion;
        this.inicio = inicio;
        this.fin = fin;
    }
}