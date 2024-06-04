import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { ProductosComponent } from './productos/productos.component';
import { EmpleadosComponent } from './empleados/empleados.component';
import { MovimientoComponent } from './movimiento/movimiento.component';

const routes:Routes =[
  {path:'',component:LoginComponent},
  {path:'productos',component:ProductosComponent},
  {path:'empleados',component:EmpleadosComponent},
  {path:'movimientos',component:MovimientoComponent},
  { path: '', redirectTo: '/login', pathMatch: 'full' }


]


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
