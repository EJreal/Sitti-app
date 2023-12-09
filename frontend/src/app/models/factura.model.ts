
export class Factura {
  consecutivo?: number;
  fecha?: Date;
  cliente?: string;
}

export class FacturaDetalle {
  consecutivo?: number;
  idProducto?: number;
  cantidad?: number;
  valorUnitario?: number;
}
