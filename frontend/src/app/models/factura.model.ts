
export class Factura {
  consecutivo?: number;
  fecha?: Date;
  cliente?: number;
}

export class FacturaDetalle {
  consecutivo?: number;
  idProducto?: number;
  cantidad?: number;
  valorUnitario?: number;
}
