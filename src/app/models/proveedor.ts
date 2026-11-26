
import { Pais } from "./pais";
import { Datacatalogo } from "./datacatalogo";

export interface Proveedor {

    idProveedor: number;
    nombre: string;
    dni: string;
    estado: number;
    tipo: Datacatalogo;
    pais: Pais;

}

