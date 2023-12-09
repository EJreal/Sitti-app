// app/productos/components/producto-list/producto-list.component.ts

import { Component, OnInit } from '@angular/core';
import { Producto } from '../../../models/producto.model';
import { ProductoService } from '../../services/producto.service';

@Component({
  selector: 'app-producto-list',
  templateUrl: './producto-list.component.html',
  styleUrls: ['./producto-list.component.css'],
})
export class ProductoListComponent implements OnInit {
  productos: Producto[] = [];

  constructor(private productoService: ProductoService) {}

  ngOnInit(): void {
    this.loadProductos();
  }

  private loadProductos() {
    this.productoService.getAllProductos().subscribe((productos) => {
      this.productos = productos;
    });
  }
}
