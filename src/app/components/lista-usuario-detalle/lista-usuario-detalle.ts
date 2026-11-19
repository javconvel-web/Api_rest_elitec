
import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { Usuario } from '../../models/usuario';
import { UsuarioService } from '../../services/usuario-service';

@Component({
  imports: [],
  selector: 'app-lista-usuario-detalle',
  styleUrl: './lista-usuario-detalle.css',
  templateUrl: './lista-usuario-detalle.html',
})
export class ListaUsuarioDetalle implements OnInit {

  usuario?: Usuario;

  constructor(
    
    private route: ActivatedRoute,
    private usuarioService: UsuarioService,
    private location: Location,
    private cdr: ChangeDetectorRef
    
  ) {}

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');

    if (id) {
      this.usuarioService.verDetalle(id).subscribe({
        next: (data) => {
          this.usuario = data;
          this.cdr.detectChanges();
          console.log('Usuario recibido:', data);
          console.log('Nombre del usuario:', this.usuario.name);
          console.log('Detalle del usuario:', data);
        },
        error: (error) => {
          console.error('Error al obtener el detalle:', error);
        }
      });
    }
  }

  regresar(): void {
    this.location.back();
  }
}
