
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ProveedorService {

  constructor(private http: HttpClient) {}

  public insertarProveedor(proveedor: any): Observable<any> {
    return this.http.post('http://localhost:8091/api/proveedor', proveedor);
  }

}
