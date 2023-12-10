// usuario-form.component.ts
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Usuario, Perfil } from '../../../models/usuario.model';
import {
  UsuarioService,
  PerfilService,
} from '../../services/usuario.service';

@Component({
  selector: 'app-usuario-form',
  templateUrl: './usuario-form.component.html',
  styleUrls: ['./usuario-form.component.css']
})
export class UsuarioFormComponent implements OnInit {
  usuario: Usuario = new Usuario(); 
  
  perfiles: Perfil[] = []; 
  isEditing = false;


  constructor(
    private usuarioService: UsuarioService,
    private perfilService: PerfilService, 
    private route: ActivatedRoute,
    private router: Router
  ) {}


  ngOnInit() {
    this.route.params.subscribe(params => {
      const usuarioId = params['id'];
      if (usuarioId) {
        this.isEditing = true;
        this.usuarioService.getUsuarioById(usuarioId).subscribe(usuario => {
          this.usuario = usuario;
        });
      }
    });
    // Obtener la lista de perfiles
    this.perfilService.getAllPerfiles().subscribe(perfiles => {
      this.perfiles = perfiles;
    });
  }

  getPerfilNombre(id: number) {
    const perfiles = this.perfiles.find(t => t.idPerfil === id);
    return perfiles ? perfiles.nombre : '';
  }

  submitForm() {
    if (this.usuario.idUsuario) {
      // Actualizar usuario existente
      console.log("Actualizando usuario");
      this.usuarioService.updateUsuario(this.usuario.idUsuario,this.usuario).subscribe(() => {
        this.router.navigate(['/usuarios']); // Redirigir a la lista de usuarios después de la actualización
      });
    } else {
      // Crear nuevo usuario
      console.log("Creando usuario");
      this.usuarioService.createUsuario(this.usuario).subscribe(() => {
        this.router.navigate(['/usuarios']); // Redirigir a la lista de usuarios después del registro
      });
    }
  }

  cancel() {
    this.router.navigate(['/usuarios']); // Redirigir a la lista de usuarios sin realizar cambios
  }
}
