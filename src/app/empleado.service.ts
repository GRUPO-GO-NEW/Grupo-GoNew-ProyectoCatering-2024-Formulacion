import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class EmpleadoService {
  private apiUrlEmpleados = 'http://localhost:3000/api/empleados'; // URL de tu API
  private apiUrlProductos = 'http://localhost:3000/api/productos';
  private apiUrlMovimiento = 'http://localhost:3000/api/movimientos';
  constructor(private http: HttpClient) {}

  getEmpleados(): Observable<any[]> {
    return this.http.get<any[]>(this.apiUrlEmpleados);
  }

  getEmpleado(id: number): Observable<any> {
    return this.http.get<any>(`${this.apiUrlEmpleados}/${id}`);
  }

  addEmpleado(empleado: any): Observable<any> {
    return this.http.post<any>(this.apiUrlEmpleados, empleado);
  }

  updateEmpleado(id: number, empleado: any): Observable<any> {
    return this.http.put<any>(`${this.apiUrlEmpleados}/${id}`, empleado);
  }

  deleteEmpleado(id: number): Observable<any> {
    return this.http.delete<any>(`${this.apiUrlEmpleados}/${id}`);
  }
  getProductos(): Observable<any[]> {
    return this.http.get<any[]>(this.apiUrlProductos);
  }

  getProducto(id: number): Observable<any> {
    return this.http.get<any>(`${this.apiUrlProductos}/${id}`);
  }

  addProducto(producto: any): Observable<any> {
    return this.http.post<any>(this.apiUrlProductos, producto);
  }

  updateProducto(id: number, producto: any): Observable<any> {
    return this.http.put<any>(`${this.apiUrlProductos}/${id}`, producto);
  }

  deleteProducto(id: number): Observable<any> {
    return this.http.delete<any>(`${this.apiUrlProductos}/${id}`);
  }

  // Métodos para Movimientos de Inventario
  getMovimientos(): Observable<any[]> {
    return this.http.get<any[]>(this.apiUrlMovimiento);
  }

  getMovimiento(id: number): Observable<any> {
    return this.http.get<any>(`${this.apiUrlMovimiento}/${id}`);
  }

  addMovimiento(movimiento: any): Observable<any> {
    return this.http.post<any>(this.apiUrlMovimiento, movimiento);
  }

  updateMovimiento(id: number, movimiento: any): Observable<any> {
    return this.http.put<any>(`${this.apiUrlMovimiento}/${id}`, movimiento);
  }

  deleteMovimiento(id: number): Observable<any> {
    return this.http.delete<any>(`${this.apiUrlMovimiento}/${id}`);
  }
}
