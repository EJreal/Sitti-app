// usuario-list.component.ts
import { Component, OnInit } from '@angular/core';
import { UsuarioService } from '../../services/usuario.service';
import { Usuario } from '../../../models/usuario.model';

@Component({
  selector: 'app-usuario-list',
  templateUrl: './usuario-list.component.html',
  styleUrls: ['./usuario-list.component.css']
})
export class UsuarioListComponent implements OnInit {

  usuarios: Usuario[] = [];
  dtOptions: DataTables.Settings = {};

  constructor(private usuarioService: UsuarioService) {}

  ngOnInit() {
    this.loadUsuarios();

    this.dtOptions = {
      pagingType: 'full_numbers',
      pageLength: 10,
    };
  }

  loadUsuarios() {
    this.usuarioService.getAllUsuarios().subscribe(usuarios => {
      this.usuarios = usuarios;
    });
  }

  deleteUsuario(id: number) {
    // Implementa la lógica para eliminar el usuario
    this.usuarioService.deleteUsuario(id).subscribe(() => {
      this.loadUsuarios(); // Recarga la lista después de eliminar
    });
  }
}
