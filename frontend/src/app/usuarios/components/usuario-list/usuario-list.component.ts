// app/usuarios/components/usuario-list/usuario-list.component.ts

import { Component, OnInit } from '@angular/core';
import { Usuario } from '../../../models/usuario.model';
import { UsuarioService } from '../../services/usuario.service';

@Component({
  selector: 'app-usuario-list',
  templateUrl: './usuario-list.component.html',
  styleUrls: ['./usuario-list.component.css'],
})
export class UsuarioListComponent implements OnInit {
  usuarios: Usuario[] = [];

  constructor(private usuarioService: UsuarioService) {}

  ngOnInit(): void {
    this.loadUsuarios();
  }

  private loadUsuarios() {
    this.usuarioService.getAllUsuarios().subscribe((usuarios) => {
      this.usuarios = usuarios;
    });
  }
}
