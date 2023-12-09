// app/clientes/components/cliente-list/cliente-list.component.ts

import { Component, OnInit } from '@angular/core';
import { Cliente } from '../../../models/cliente.model';
import { ClienteService } from '../../services/cliente.service';

@Component({
  selector: 'app-cliente-list',
  templateUrl: './cliente-list.component.html',
  styleUrls: ['./cliente-list.component.css'],
})
export class ClienteListComponent implements OnInit {
  clientes: Cliente[] = [];
  dtOptions: DataTables.Settings = {};

  constructor(private clienteService: ClienteService) {}

  ngOnInit(): void {
    this.loadClientes();

    this.dtOptions = {
      pagingType: 'full_numbers',
      pageLength: 10,
    };
  }

  loadClientes() {
    this.clienteService.getAllClientes().subscribe((clientes) => {
      this.clientes = clientes;
    });
  }

  deleteCliente(id: number) {
    this.clienteService.deleteCliente(id).subscribe(() => {
      // Recargar la lista después de eliminar
      this.loadClientes();
    });
  }
}

