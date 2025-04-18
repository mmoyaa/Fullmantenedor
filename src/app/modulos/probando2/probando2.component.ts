import { Component, OnInit } from '@angular/core';
import {MatTableDataSource, MatTableModule} from '@angular/material/table';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import { RegionesService } from 'src/app/servicios/regiones.service';
import { HttpClientModule } from '@angular/common/http';
import { reduce } from 'rxjs';
import { Observable } from 'rxjs';
import { Region } from 'src/app/models/region';

import { MatPaginator } from '@angular/material/paginator';  // Para la paginación (opcional)
import { MatSort } from '@angular/material/sort';  // Para el ordenamiento (opcional)
import { FormControl, FormGroup, Validators } from '@angular/forms';

import { NgModule } from '@angular/core';

import { CommonModule } from '@angular/common';

import { ReactiveFormsModule } from '@angular/forms';








@Component({
  selector: 'app-probando2',
  templateUrl: './probando2.component.html',
  styleUrls: ['./probando2.component.scss']
})
export class Probando2Component implements OnInit{
  ngOnInit(): void {

 this.getmovimientos();
 this.listarMovimientos();
  }


  movall: any[] = [];
  movimientosSeleccionados: any[] = []; 




constructor(private regionesService: RegionesService) { }
    validadorform = new FormGroup({
      dato1: new FormControl('', [Validators.required]),
      dato2: new FormControl('', [Validators.required]),
      dato3: new FormControl('', [Validators.required]),
      nombre: new FormControl('', [Validators.required]),
      apellido: new FormControl('', [Validators.required]),
      edad: new FormControl('', [Validators.required]),
      validacion: new FormControl('', [Validators.required]),
      movimientoSeleccionado: new FormControl ('')
    });

    active = 1;
  
    
    getmovimientos() {
      this.regionesService.getmovimientos().subscribe((res: any) => {
        this.movall = res;
        console.log(this.movall);
      });
    }
  
    
    agregarMovimiento() {
      const selectedId = this.validadorform.controls.movimientoSeleccionado.value;
      const movimiento = this.movall.find(m => m.id == selectedId) ;
  
      
      const yaExiste = this.movimientosSeleccionados.some(m => m.id == movimiento.id);
  
      if (movimiento && !yaExiste) {
        this.movimientosSeleccionados.push(movimiento);
      }
    }
  
    
    eliminarMovimiento(index: number) {
      const mov = this.movimientosSeleccionados[index];
    
      this.regionesService.eliminarMovimiento(mov.id).subscribe({
        next: (res) => {
          console.log('Eliminado correctamente:', res);
          this.movimientosSeleccionados.splice(index, 1); 
          this.listarMovimientos();
        },
        error: (err) => {
          console.error('Error al eliminar:', err);
          alert('Hubo un error al eliminar el movimiento.');
        }
      });
    }
    guardarMovimientos() {
      if (this.movimientosSeleccionados.length === 0) {
        alert('No hay movimientos para guardar.');
        return;
      }
    
      this.regionesService.guardarMovimientos(this.movimientosSeleccionados).subscribe({
        next: (res) => {
          console.log('Guardado correctamente:', res);
          alert('Movimientos guardados exitosamente!');
          this.movimientosSeleccionados = []; 
          this.listarMovimientos();
        },
        error: (err) => {
          console.error('Error al guardar:', err);
          alert('Hubo un error al guardar los movimientos.');
        }
      });
    }

    quitar(index: number) {
      this.movimientosSeleccionados.splice(index, 1);
    }

   


    movimientosGuardados: any[] = [];

    listarMovimientos() {
      this.regionesService.listarMovimientos().subscribe({
        next: (res) => {
          this.movimientosGuardados = res;
          console.log('Movimientos desde DB:', this.movimientosGuardados);
        },
        error: (err) => {
          console.error('Error al listar movimientos:', err);
        }
      });
    }
  
    eliminarMovimientoPorId(id: number) {
      this.regionesService.eliminarMovimiento(id).subscribe({
        next: (res) => {
          console.log('Eliminado correctamente:', res);
          this.movimientosSeleccionados = this.movimientosSeleccionados.filter(m => m.id !== id);
          this.listarMovimientos();
        },
        error: (err) => {
          console.error('Error al eliminar:', err);
          alert('Hubo un error al eliminar el movimiento.');
        }
      });
    }



    
  }

