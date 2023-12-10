import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Cliente, TipoIdentificacion } from '../../../models/cliente.model';
import {
  ClienteService,
  TipoIdentificacionService,
} from '../../services/cliente.service';

@Component({
  selector: 'app-cliente-form',
  templateUrl: './cliente-form.component.html',
  styleUrls: ['./cliente-form.component.css'],
})
export class ClienteFormComponent implements OnInit {
  cliente: Cliente = new Cliente();
  isEditing = false;
  tiposIdentificacion: TipoIdentificacion[] = [];
  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private clienteService: ClienteService,
    private tipoIdentificacionService: TipoIdentificacionService
  ) {}

  ngOnInit() {
    this.route.params.subscribe((params) => {
      const clienteId = params['id'];
      console.log(clienteId);
      if (clienteId) {
        console.log('obten el cliente');

        this.isEditing = true;
        this.clienteService.getClienteById(clienteId).subscribe((cliente) => {
          this.cliente = cliente;
        });
      }
    });

    this.tipoIdentificacionService.getAllTiposIdentificaciones().subscribe((tipos) => {
      this.tiposIdentificacion = tipos;
      console.log('se obtuvo el cliente', this.tiposIdentificacion);

    });
  }

  getTipoIdentificacionDescripcion(id: number) {
    const tipo = this.tiposIdentificacion.find(t => t.tipoIdentificacion === id);
    return tipo ? tipo.descripcion : '';
  }

  submitForm() {
    if (this.isEditing) {
      this.clienteService
        .updateCliente(this.cliente.cliente!, this.cliente)
        .subscribe(() => {
          this.router.navigate(['/clientes']);
        });
    } else {
      this.clienteService.createCliente(this.cliente).subscribe(() => {
        this.router.navigate(['/clientes']);
      });
    }
  }

  cancel() {
    this.router.navigate(['/clientes']);
  }
}
