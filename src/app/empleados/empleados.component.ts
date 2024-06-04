import { Component, OnInit } from '@angular/core';
import { EmpleadoService } from '../empleado.service';

@Component({
  selector: 'app-empleados',
  templateUrl: './empleados.component.html',
  styleUrls: ['./empleados.component.css']
})
export class EmpleadosComponent implements OnInit {

  constructor(private dataService: EmpleadoService) {}

  empleados: any[] = [];
  empleado: any = {};
  mostrarFormulario: boolean = false;
  modoEdicion: boolean = false;

  ngOnInit(): void {
    this.actualizarEmpleados();
  }

  actualizarEmpleados() {
    this.dataService.getEmpleados().subscribe((data: any[]) => {
      this.empleados = data;
    });
  }

  toggleFormulario() {
    this.mostrarFormulario = !this.mostrarFormulario;
    this.empleado = {}; // Limpiar el formulario al mostrarlo
    this.modoEdicion = false; // Reiniciar el modo de edición
  }

  guardarEmpleado() {
    if (this.modoEdicion) {
      // Lógica para guardar cambios de edición
      this.dataService.updateEmpleado(this.empleado.ID_Empleado, this.empleado).subscribe(() => {
        this.actualizarEmpleados();
        this.mostrarFormulario = false;
      });
    } else {
      // Lógica para agregar un nuevo empleado
      this.dataService.addEmpleado(this.empleado).subscribe(() => {
        this.actualizarEmpleados();
        this.mostrarFormulario = false;
      });
    }
  }

  editarEmpleado(empleado: any) {
    this.empleado = { ...empleado }; // Copiar el empleado para evitar modificar el original directamente
    this.mostrarFormulario = true;
    this.modoEdicion = true;
  }

  cancelarEdicion() {
    this.mostrarFormulario = false;
    this.empleado = {}; // Limpiar el formulario al cancelar la edición
    this.modoEdicion = false;
  }

  eliminarEmpleado(empleado: any) {
    this.dataService.deleteEmpleado(empleado.ID_Empleado).subscribe(() => {
      this.actualizarEmpleados();
    });
  }
}
