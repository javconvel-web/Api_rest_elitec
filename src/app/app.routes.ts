import { Routes } from '@angular/router';
import { ListaRevistaMaterial } from './components/lista-revista-material/lista-revista-material';
import { ListaProducto } from './components/lista-producto/lista-producto';
import { ListaMercaderia } from './components/lista-mercaderia/lista-mercaderia';
import { ListaMercaderiaDetalle } from './components/lista-mercaderia-detalle/lista-mercaderia-detalle';
import { ListaUsuario } from './components/lista-usuario/lista-usuario';
import { ListaUsuarioDetalle } from './components/lista-usuario-detalle/lista-usuario-detalle';

export const routes: Routes = [

    // Lista de revista
    { path: 'listaRevista', component: ListaRevistaMaterial },

    // Lista de productos
    { path: 'listaProducto', component: ListaProducto },

    // Lista de mercaderias
    { path: 'listaMercaderia', component: ListaMercaderia },
    { path: 'detalleMercaderia/:id', component: ListaMercaderiaDetalle },

    // Lista de usuarios
    { path: 'listaUsuario', component: ListaUsuario },
    { path: 'detalleUsuario/:id', component: ListaUsuarioDetalle },

];