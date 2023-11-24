export class Receta {
    id: string; 
    nombre: string;
    descripcion: string;
    dificultad: string;
    duración: string;
    ingredientes: string;
    categoria: string;
    imagen: string;
    estrellas: string;
    cantidadOpiniones: string;
    autorReceta: string;
    
    public constructor(id: string,nombre: string,descripcion: string,dificultad: string,duración: string,ingredientes: string,categoria: string,
        imagen: string,
        estrellas: string,
        cantidadOpiniones: string,
        autorReceta: string){
            this.id = id ; 
            this.nombre = nombre;
            this.descripcion = descripcion;
            this.dificultad = dificultad;
            this.duración = duración;
            this.ingredientes = ingredientes;
            this.categoria = categoria;
            this.imagen = imagen;
            this.estrellas = estrellas;
            this.cantidadOpiniones = cantidadOpiniones;
            this.autorReceta = autorReceta;
    }
}

