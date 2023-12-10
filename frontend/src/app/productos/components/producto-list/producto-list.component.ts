// producto-list.component.ts
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Producto } from '../../../models/producto.model';
import { ProductoService } from '../../services/producto.service';

@Component({
  selector: 'app-producto-list',
  templateUrl: './producto-list.component.html',
  styleUrls: ['./producto-list.component.css'],
})
export class ProductoListComponent implements OnInit {
  productos: Producto[] = []; // Inicializar con una lista vacía o cargar desde el servicio
  dtOptions: DataTables.Settings = {};

  constructor(
    private productoService: ProductoService,
    private router: Router
  ) {}

  ngOnInit() {
    this.loadProductos();

    this.dtOptions = {
      pagingType: 'full_numbers',
      pageLength: 10,
    };
  }

  loadProductos() {
    this.productoService.getAllProductos().subscribe((productos) => {
      this.productos = productos;
    });
  }

  deleteProducto(productoId: number) {
    // Lógica para eliminar producto
    this.productoService.deleteProducto(productoId).subscribe(() => {
      this.loadProductos(); // Recargar la lista después de la eliminación
    });
  }
}
