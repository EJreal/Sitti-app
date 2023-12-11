import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Factura, FacturaDetalle } from '../../../models/factura.model';
import { Cliente, TipoIdentificacion } from '../../../models/cliente.model';
import { Producto } from '../../../models/producto.model';
import { FacturacionService } from '../../services/facturacion.service';
import {
  ClienteService,
  TipoIdentificacionService,
} from '../../../clientes/services/cliente.service';
import { ProductoService } from '../../../productos/services/producto.service';

@Component({
  selector: 'app-facturacion-form',
  templateUrl: './facturacion-form.component.html',
  styleUrls: ['./facturacion-form.component.css'],
})
export class FacturacionFormComponent implements OnInit {
  factura: Factura = new Factura();
  facturaItems: FacturaDetalle[] = [];
  tiposIdentificacion: TipoIdentificacion[] = [];
  clientes: Cliente[] = [];
  productos: Producto[] = [];
  selectedCliente: Cliente | null = null;
  selectedProducto: Producto | null = null;
  tipoIdentificacion: number | null = null;
  identificacion: string | null = null;
  producto: number | null = null;
  cantidad: number | null = null;
  Total: number | null = null;

  facturaCompletada: boolean = false;

  facturas: Factura[] = [];

  constructor(
    private router: Router,
    private clienteService: ClienteService,
    private productoService: ProductoService,
    private facturacionService: FacturacionService,
    private tipoIdentificacionService: TipoIdentificacionService
  ) {}

  ngOnInit(): void {
    this.loadTiposIdentificacion();
    this.loadProductos();
    this.loadClientes();
  }

  loadTiposIdentificacion() {
    this.tipoIdentificacionService
      .getAllTiposIdentificaciones()
      .subscribe((tipos) => {
        this.tiposIdentificacion = tipos;
      });
  }

  loadProductos() {
    this.productoService.getAllProductos().subscribe((productos) => {
      this.productos = productos;
    });
  }

  loadClientes() {
    this.clienteService.getAllClientes().subscribe((clientes) => {
      this.clientes = clientes;
    });
  }

  buscarCliente() {
    if (this.tipoIdentificacion && this.identificacion) {
      // Buscar al cliente en la lista cargada
      console.log(this.clientes);
      console.log(this.identificacion);
      console.log(this.tipoIdentificacion);

      const clienteEncontrado = this.clientes.find(
        (cliente) =>
          cliente.identificacion === String(this.identificacion) &&
          cliente.tipoIdentificacion === Number(this.tipoIdentificacion)
      );

      if (clienteEncontrado) {
        this.selectedCliente = clienteEncontrado;
      } else {
        console.error('Cliente no encontrado en la lista.');
      }
    } else {
      console.error(
        'Seleccione un tipo de identificación y/o ingrese una identificación.'
      );
    }
  }

  buscarProducto() {
    if (this.producto) {
      const productoEncontrado = this.productos.find(
        (producto) => producto.id === this.producto
      );
      if (productoEncontrado) {
        this.selectedProducto = productoEncontrado;
      } else {
        console.error('Cliente no encontrado en la lista.');
      }
    }
  }

  agregarProducto() {
    if (this.selectedProducto && this.selectedCliente) {
      console.log(this.selectedProducto);
      const facturaItem: FacturaDetalle = {
        idProducto: this.selectedProducto.id,
        cantidad: this.cantidad!,
        valorUnitario: this.selectedProducto.valorUnitario,
      };

      this.facturaItems.push(facturaItem);
      this.calcularTotalFacturado();
      console.log(this.facturaItems);
    }
  }

  eliminarItem(index: number) {
    this.facturaItems.splice(index, 1);
    this.calcularTotalFacturado();
  }

  calcularTotalFacturado() {
    this.facturaItems.forEach((detalle) => {
      const totalDetalle = detalle.cantidad! * detalle.valorUnitario!;
      this.Total! += totalDetalle;
    });
  }

  guardarFactura() {
    if (this.selectedCliente) {
      this.factura.cliente = this.selectedCliente.cliente;
      this.factura.fecha = new Date();
      console.log('por createFactura');

      this.facturacionService
        .createFactura(this.factura)
        .subscribe((facturaCreada) => {
          const consecutivoFactura = facturaCreada.consecutivo;
          console.log('facturaDetallesSinCnsecutivo', this.facturaItems);

          this.facturacionService
            .getFacturaById(consecutivoFactura!)
            .subscribe((factura) => {
              this.facturaCompletada = true;
              console.log('facturabyid', factura);
              this.facturaItems.forEach((detalle) => {
                detalle.consecutivo = factura.consecutivo;
              });
              this.guardarFacturaItems();
            });
          console.log('termina CreateFactura');
        });
    }
  }

  guardarFacturaItems() {
    console.log('Guardar Factura Items');

    console.log('facturaDetallesConCnsecutivo', this.facturaItems);

    this.facturaItems.forEach((detalle) => {
      console.log('por facturaDetalle');
      this.facturacionService.createFacturaDetalle(detalle).subscribe(() => {
        console.log('termina facturaDetalle');
      } );
    });
  }
}
