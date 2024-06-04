import { Component, OnInit } from '@angular/core';
import { EmpleadoService } from '../empleado.service';

@Component({
  selector: 'app-productos',
  templateUrl: './productos.component.html',
  styleUrls: ['./productos.component.css']
})
export class ProductosComponent implements OnInit {

  constructor(private dataService: EmpleadoService) {}

  productos: any[] = [];
  producto: any = {};
  mostrarFormulario: boolean = false;
  modoEdicion: boolean = false;

  ngOnInit(): void {
    this.actualizarProductos();
  }

  actualizarProductos() {
    this.dataService.getProductos().subscribe((data: any[]) => {
      this.productos = data;
    });
  }

  toggleFormulario() {
    this.mostrarFormulario = !this.mostrarFormulario;
    this.producto = {}; // Limpiar el formulario al mostrarlo
    this.modoEdicion = false; // Reiniciar el modo de edición
  }

  guardarProducto() {
    if (this.modoEdicion) {
      // Lógica para guardar cambios de edición
      this.dataService.updateProducto(this.producto.ID_Producto, this.producto).subscribe(() => {
        this.actualizarProductos();
        this.mostrarFormulario = false;
      });
    } else {
      // Lógica para agregar un nuevo producto
      this.dataService.addProducto(this.producto).subscribe(() => {
        this.actualizarProductos();
        this.mostrarFormulario = false;
      });
    }
  }

  editarProducto(producto: any) {
    this.producto = { ...producto }; // Copiar el producto para evitar modificar el original directamente
    this.mostrarFormulario = true;
    this.modoEdicion = true;
  }

  cancelarEdicion() {
    this.mostrarFormulario = false;
    this.producto = {}; // Limpiar el formulario al cancelar la edición
    this.modoEdicion = false;
  }

  eliminarProducto(producto: any) {
    this.dataService.deleteProducto(producto.ID_Producto).subscribe(() => {
      this.actualizarProductos();
    });
  }
}
