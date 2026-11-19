import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Usuario } from '../models/usuario';

@Injectable({
  providedIn: 'root',
})
export class UsuarioService {
 constructor(private http: HttpClient){}


     listaUsuario(): Observable<Usuario[]>{
       return this.http.get<Usuario[]>('https://jsonplaceholder.typicode.com/users')
     }

     verDetalle(id: string):Observable<Usuario>{
        return this.http.get<Usuario>('https://jsonplaceholder.typicode.com/users/' + id);
    }
}