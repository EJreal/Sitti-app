// producto-form.component.ts
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductoService } from '../../services/producto.service';
import { Producto } from '../../../models/producto.model';

@Component({
  selector: 'app-producto-form',
  templateUrl: './producto-form.component.html',
  styleUrls: ['./producto-form.component.css']
})
export class ProductoFormComponent implements OnInit {

  producto: Producto = { nombre: '', estado: '', valorUnitario: 0 };
  isEditing = false;

  constructor(
    private productoService: ProductoService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit() {
    this.route.params.subscribe(params => {
      const productoId = params['id'];
      if (productoId) {
        this.isEditing = true;
        this.productoService.getProductoById(productoId).subscribe(producto => {
          this.producto = producto;
        });
      }
    });
  }

  submitForm() {
    if (this.isEditing) {
      this.productoService.updateProducto(this.producto.id!,this.producto).subscribe(() => {
        this.router.navigate(['/productos']);
      });
    } else {
      this.productoService.createProducto(this.producto).subscribe(() => {
        this.router.navigate(['/productos']);
      });
    }
  }

  cancel() {
    this.router.navigate(['/productos']);
  }
}
