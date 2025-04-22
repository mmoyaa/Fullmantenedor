import { Component, OnInit } from '@angular/core';
import { PrincipalService } from 'src/app/servicios/principal.service';
import { RegionesService } from 'src/app/servicios/regiones.service';
import { FormBuilder, FormGroup } from '@angular/forms';
@Component({
  selector: 'app-probando8',
  templateUrl: './probando8.component.html',
  styleUrls: ['./probando8.component.scss'],
})
export class Probando8Component implements OnInit {



  formulario: FormGroup;
  comunasFiltradas: any[] = [];
  sectoresFiltradas: any[] = [];


  
  constructor(private principalService: PrincipalService, private fb: FormBuilder) {

    this.formulario = this.fb.group({
      reparticion: [null], // <-- asegurate que esté en null, no en string vacío
      comuna: [null],
      sector: [null]
    });

  
  }
  
  ngOnInit() {
    this.listarcomunas(), this.listarreparticiones(), this.listarsectores();

    // this.formulario.get('reparticion')?.valueChanges.subscribe(reparticionId => {
    //   this.comunasFiltradas = this.comunasAll.filter(c => c.reparticion_id == reparticionId);
    // });
    
    // this.formulario.get('comuna')?.valueChanges.subscribe(comunaId => {
    //   this.sectoresFiltradas = this.sectoresAll.filter(s => s.comuna_id == comunaId);
    //   this.formulario.patchValue({ sector: '' });
    // });
    this.formulario.get('reparticion')?.valueChanges.subscribe(reparticionId => {
      console.log('ID repartición seleccionada:', reparticionId);
      console.log('Todas las comunas:', this.comunasAll);
    
      // Mostramos todos los reparticion_id posibles
      for (const c of this.comunasAll) {
        console.log(`Comuna: ${c.nombre}, Repartición relacionada: ${c.reparticion_id ?? c.reparticionId}`);
      }
    
      // Probar con el nombre que veas en consola
      this.comunasFiltradas = this.comunasAll.filter(c => c.reparticionId == +reparticionId);
      console.log('Comunas filtradas:', this.comunasFiltradas);
    });



  }

  comunasAll: any[] = [];

  listarcomunas() {
    this.principalService.listarcomunas().subscribe((res: any) => {
      this.comunasAll = res;
      console.log('las comunas son:', this.comunasAll);
    });
  }

  reparticionesAll: any[] = [];

  listarreparticiones() {
    this.principalService.listarreparticiones().subscribe((res: any) => {
      this.reparticionesAll = res;
      console.log('las reparticiones  son:', this.reparticionesAll);
    });
  }

  sectoresAll: any[] = [];
  listarsectores() {
    this.principalService.listarsectores().subscribe((res: any) => {
      this.sectoresAll = res;
      console.log('las sectores son:', this.sectoresAll);
    });
  }
// -----------------------------------------------------------------------------------------------

enviar() {
  console.log(this.formulario.value);
  // Aquí podrías enviar al backend si deseas
}












}
