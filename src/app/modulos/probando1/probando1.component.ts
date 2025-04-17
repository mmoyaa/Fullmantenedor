import { Component } from '@angular/core';
<<<<<<< HEAD
import {MatTableDataSource, MatTableModule} from '@angular/material/table';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import { RegionesService } from 'src/app/servicios/regiones.service';
import { HttpClientModule } from '@angular/common/http';
import { reduce } from 'rxjs';
import { Observable } from 'rxjs';
import { Region } from 'src/app/models/region';


export interface mejoraFiscacal {
  id: number;
  mejora: string;
  editar: string;

}



export class PlanosMejorasComponent {
  MEJORAFISCAL: mejoraFiscacal[] = [
    { id: 1, mejora: 'RESTAURANT', editar: 'x' },
    { id: 2, mejora: 'RESTAURANT', editar: 'x' },
    { id: 3, mejora: 'MUELLES', editar: 'x' },
    { id: 5, mejora: 'MUELLES', editar: 'x' },
    { id: 6, mejora: 'VARADERO', editar: 'x' },
    { id: 7, mejora: 'DEFENSAS', editar: 'x' },
    { id: 8, mejora: 'BOYAS', editar: 'x' },
    { id: 9, mejora: 'BOYAS', editar: 'x' },
    { id: 10, mejora: 'BOYAS', editar: 'x' },
    { id: 11, mejora: 'MUELLES', editar: 'x' },
    { id: 12, mejora: 'MUELLES', editar: 'x' },
    { id: 13, mejora: 'RESTAURANT', editar: 'x' },
    { id: 14, mejora: 'RESTAURANT', editar: 'x' },
    { id: 15, mejora: 'RESTAURANT', editar: 'x' },
  ];



  @Component({
    selector: 'app-probando1',
    templateUrl: './probando1.component.html',
    styleUrls: ['./probando1.component.scss']
  })
  agregarMejora(nuevaMejora: string) {
    const nuevoId = this.MEJORAFISCAL.length ? Math.max(...this.MEJORAFISCAL.map(m => m.id)) + 1 : 1;
    this.MEJORAFISCAL.push({ id: nuevoId, mejora: nuevaMejora, editar: 'x' });
  }


agregarMejora2(nuevaMejora: string) {
  const newId = this.MEJORAFISCAL.length + 1;
  this.MEJORAFISCAL.push({ id: newId, mejora: nuevaMejora, editar: 'Editar' });
}



}
=======
import { NUEVOService } from 'src/app/servicios/nuevo.service';

@Component({
  selector: 'app-probando1',
  templateUrl: './probando1.component.html',
  styleUrls: ['./probando1.component.scss']
})
export class Probando1Component {
constructor(public nuevoService: NUEVOService) { }


}

>>>>>>> 6bff81a2f919d1760220c28c0b73e7584ce3b08f
