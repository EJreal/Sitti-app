// facturacion.service.ts

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Factura, FacturaDetalle } from '../../models/factura.model';

@Injectable({
  providedIn: 'root',
})
export class FacturacionService {
  private apiUrl = 'http://localhost:8080/facturacion';

  constructor(private http: HttpClient) {}

  getAllFacturas(): Observable<Factura[]> {
    return this.http.get<Factura[]>(this.apiUrl);
  }

  getFacturaById(id: number): Observable<Factura> {
    return this.http.get<Factura>(`${this.apiUrl}/${id}`);
  }

  createFactura(factura: Factura): Observable<Factura> {
    return this.http.post<Factura>(this.apiUrl, factura);
  }

  updateFactura(id: number, factura: Factura): Observable<Factura> {
    return this.http.put<Factura>(`${this.apiUrl}/${id}`, factura);
  }

  deleteFactura(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`);
  }

  createFacturaDetalle(detalles: FacturaDetalle): Observable<void> {
    const apiUrl = `${this.apiUrl}/detalle`;
    return this.http.post<void>(apiUrl, detalles);
  }
}
