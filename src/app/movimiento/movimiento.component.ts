import { Component, OnInit } from '@angular/core';
import { EmpleadoService } from '../empleado.service';

@Component({
  selector: 'app-movimiento-inventario',
  templateUrl: './movimiento.component.html',
  styleUrls: ['./movimiento.component.css']
})
export class MovimientoComponent implements OnInit {

  constructor(private dataService: EmpleadoService) {}

  movimientos: any[] = [];
  movimiento: any = {};
  mostrarFormulario: boolean = false;
  modoEdicion: boolean = false;
  productos: any[] = []; // Necesario para el select de productos
  empleados: any[] = []; // Necesario para el select de empleados

  ngOnInit(): void {
    this.actualizarMovimientos();
    this.actualizarProductos();
    this.actualizarEmpleados();
  }

  actualizarMovimientos() {
    this.dataService.getMovimientos().subscribe((data: any[]) => {
      this.movimientos = data;
    });
  }

  actualizarProductos() {
    this.dataService.getProductos().subscribe((data: any[]) => {
      this.productos = data;
    });
  }

  actualizarEmpleados() {
    this.dataService.getEmpleados().subscribe((data: any[]) => {
      this.empleados = data;
    });
  }

  toggleFormulario() {
    this.mostrarFormulario = !this.mostrarFormulario;
    this.movimiento = {}; // Limpiar el formulario al mostrarlo
    this.modoEdicion = false; // Reiniciar el modo de edición
  }

  guardarMovimiento() {
    if (this.modoEdicion) {
      // Lógica para guardar cambios de edición
      this.dataService.updateMovimiento(this.movimiento.ID_Movimiento, this.movimiento).subscribe(() => {
        this.actualizarMovimientos();
        this.mostrarFormulario = false;
      });
    } else {
      // Lógica para agregar un nuevo movimiento de inventario
      this.dataService.addMovimiento(this.movimiento).subscribe(() => {
        this.actualizarMovimientos();
        this.mostrarFormulario = false;
      });
    }
  }

  editarMovimiento(movimiento: any) {
    this.movimiento = { ...movimiento }; // Copiar el movimiento para evitar modificar el original directamente
    this.mostrarFormulario = true;
    this.modoEdicion = true;
  }

  cancelarEdicion() {
    this.mostrarFormulario = false;
    this.movimiento = {}; // Limpiar el formulario al cancelar la edición
    this.modoEdicion = false;
  }

  eliminarMovimiento(movimiento: any) {
    this.dataService.deleteMovimiento(movimiento.ID_Movimiento).subscribe(() => {
      this.actualizarMovimientos();
    });
  }

  // Función para obtener el nombre del producto por su ID
  getProductoNombre(idProducto: number): string {
    const producto = this.productos.find(producto => producto.ID_Producto === idProducto);
    return producto ? producto.Nombre : 'N/A';
  }

  // Función para obtener el nombre del empleado por su ID
  getEmpleadoNombre(idEmpleado: number): string {
    const empleado = this.empleados.find(empleado => empleado.ID_Empleado === idEmpleado);
    return empleado ? empleado.Nombre : 'N/A';
  }

}
