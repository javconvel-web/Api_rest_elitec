
import { Component, inject, OnInit } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { CommonModule } from '@angular/common';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';

import { ProveedorService } from '../../services/proveedor-service';
import { Pais } from '../../models/pais';
import { Datacatalogo } from '../../models/datacatalogo';
import { UtilService } from '../../services/util-service';
import { Proveedor } from '../../models/proveedor';

import Swal from 'sweetalert2';

interface ProveedorFormControls {
  nombre: FormControl<string>;
  dni: FormControl<string>;
  pais: FormControl<string>;
  tipo: FormControl<string>;
}

@Component({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatButtonModule,
    MatIconModule,
    MatToolbarModule,
    MatSnackBarModule,
    MatProgressSpinnerModule,
  ],
  selector: 'app-registro-proveedor',
  styleUrl: './registro-proveedor.css',
  templateUrl: './registro-proveedor.html',
})
export class RegistroProveedor implements OnInit {
    //El formulario de registro de proveedor
    forms!: FormGroup<ProveedorFormControls>;

    //Inyección de dependencias de los servicios
    private proveedorService = inject(ProveedorService);
    private utilService = inject(UtilService);

    //Declara la lista de países y tipos
    lstPaises: Pais[] = [];
    lstTipos: Datacatalogo[] = [];

    ngOnInit(): void {
      this.initForm();

}

  private initForm(): void {

    // Inicializa el formulario de proveedor
    this.forms = new FormGroup<ProveedorFormControls>({
      nombre: new FormControl('', { nonNullable: true }),
      dni: new FormControl('', { nonNullable: true }),
      pais: new FormControl('', { nonNullable: true }),
      tipo: new FormControl('', { nonNullable: true }),
    });

    // Carga la lista de países y tipos desde el servicio
    this.utilService.listaPaises().subscribe((data: Pais[]) => {
      this.lstPaises = data;
    });

    this.utilService.listaTipoProveedor().subscribe((data: Datacatalogo[]) => {
      this.lstTipos = data;
    });

  }


  registrar() {

    const raw = this.forms.getRawValue();

    const datos: Proveedor = {
      nombre: raw.nombre.trim(),
      dni: raw.dni.trim(),
      pais: { idPais: parseInt(raw.pais), iso: '', nombre: '' },
      tipo: { idDataCatalogo: parseInt(raw.tipo), descripcion: '' },
      idProveedor: 0,
      estado: 1
    };

    this.proveedorService.insertarProveedor(datos).subscribe(
      {
        next: (response: any) => {
          Swal.fire({
            title: 'UPC : Mensajes',
            text: response?.mensaje ?? 'Proveedor registrado correctamente',
            icon: 'info',
          });
          this.forms.reset();
        },
        error: (err: any) => {
          Swal.fire({
            title: 'UPC : Mensajes',
            text: err?.error?.mensaje ?? 'No se pudo registrar el proveedor',
            icon: 'error',
          });
        },
      }
    );
  }
}

