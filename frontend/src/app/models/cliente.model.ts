export class Cliente {
  cliente?: number;
  identificacion?: string;
  razonSocial?: string;
  fechaRegistro?: Date;
  estado?: string; 
  tipoIdentificacion?: number;
}

export class TipoIdentificacion {
  tipoIdentificacion?: number;
  abreviatura?: string;
  descripcion?: string;
}
