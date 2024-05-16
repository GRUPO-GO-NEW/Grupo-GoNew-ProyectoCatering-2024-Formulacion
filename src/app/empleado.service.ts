import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class EmpleadoService {
  private apiUrl = 'http://localhost:3000/empleados'; // URL de tu API

  constructor(private http: HttpClient) {}

  getEmpleados(): Observable<any[]> {
    return this.http.get<any[]>(this.apiUrl);
  }

  getEmpleado(id: number): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/${id}`);
  }

  addEmpleado(empleado: any): Observable<any> {
    return this.http.post<any>(this.apiUrl, empleado);
  }

  updateEmpleado(id: number, empleado: any): Observable<any> {
    return this.http.put<any>(`${this.apiUrl}/${id}`, empleado);
  }

  deleteEmpleado(id: number): Observable<any> {
    return this.http.delete<any>(`${this.apiUrl}/${id}`);
  }
}
