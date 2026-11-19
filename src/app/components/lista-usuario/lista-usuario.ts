import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Usuario } from '../../models/usuario';
import { UsuarioService } from '../../services/usuario-service';

@Component({
  imports: [RouterLink],
  selector: 'app-lista-usuario',
  styleUrl: './lista-usuario.css',
  templateUrl: './lista-usuario.html',
})
export class ListaUsuario implements OnInit {

  usuarios: Usuario[] = [];

  constructor(
  private usuarioService: UsuarioService,
  private cdr: ChangeDetectorRef
) {}

  ngOnInit(): void {
    this.usuarioService.listaUsuario().subscribe({
      next: (data) => {
        this.usuarios = data;
        this.cdr.detectChanges();
        console.log('Usuarios recibidos:', data);
        console.log('Total en la variable:', this.usuarios.length);
      },
      error: (error) => {
        console.error('Error al obtener usuarios:', error);
      }
    });
  }
}
