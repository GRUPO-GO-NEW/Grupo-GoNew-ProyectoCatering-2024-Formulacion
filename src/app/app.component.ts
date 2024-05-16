import { Component, OnInit } from '@angular/core';
import { EmpleadoService } from './empleado.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  title = 'CodeSandbox1234';
  empleados: any[] = [];
  nuevoEmpleado: any = {}; // Variable para almacenar los detalles del nuevo empleado
  empleadoActualizar: any = {}; // Variable para almacenar el empleado seleccionado para actualizar

  constructor(private empleadoService: EmpleadoService) {}

  ngOnInit() {
    this.getEmpleados(); 
  }

  getEmpleados() {
    this.empleadoService.getEmpleados().subscribe(
      (data) => (this.empleados = data),
      (error) => console.error(error),
    );
  }

  addEmpleado() {
    this.empleadoService.addEmpleado(this.nuevoEmpleado).subscribe(
      () => {
        this.getEmpleados(); // Actualizar la lista de empleados después de agregar uno nuevo
        this.nuevoEmpleado = {}; // Limpiar los campos del formulario después de agregar un empleado
      },
      (error) => console.error(error),
    );
  }

  updateEmpleado() {
    this.empleadoService.updateEmpleado(this.empleadoActualizar.id, this.empleadoActualizar).subscribe(
      () => {
        this.getEmpleados(); // Actualizar la lista de empleados después de actualizar uno
        this.empleadoActualizar = {}; // Limpiar los campos del formulario después de actualizar un empleado
      },
      (error) => console.error(error),
    );
  }

  deleteEmpleado(id: number) {
    this.empleadoService.deleteEmpleado(id).subscribe(
      () => this.getEmpleados(),
      (error) => console.error(error),
    );
  }

  selectEmpleado(empleado: any) {
    this.empleadoActualizar = { ...empleado }; // Copiar los detalles del empleado seleccionado
  }
}
