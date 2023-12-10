
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Cliente, TipoIdentificacion } from '../../models/cliente.model';

@Injectable({
  providedIn: 'root',
})
export class ClienteService {
  private apiUrl = 'http://localhost:8080/clientes'; 

  constructor(private http: HttpClient) {}

  getAllClientes(): Observable<Cliente[]> {
    return this.http.get<Cliente[]>(this.apiUrl);
  }

  getClienteById(id: number): Observable<Cliente> {
    console.log('obten el cliente service', this.apiUrl, id);
    return this.http.get<Cliente>(`${this.apiUrl}/${id}`);
  }

  createCliente(cliente: Cliente): Observable<Cliente> {
    return this.http.post<Cliente>(this.apiUrl, cliente);
  }

  updateCliente(id: number, cliente: Cliente): Observable<Cliente> {
    console.log('actualiza el cliente', id, cliente);
    return this.http.put<Cliente>(`${this.apiUrl}/${id}`, cliente);
  }

  deleteCliente(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`);
  }

 
}

@Injectable({
  providedIn: 'root',
})
export class TipoIdentificacionService {

  private apiUrl = 'http://localhost:8080/tipos-identificaciones'; 

  constructor(private http: HttpClient) {}

  getAllTiposIdentificaciones():Observable<TipoIdentificacion[]> {
    return this.http.get<TipoIdentificacion[]>(this.apiUrl);
  }
}