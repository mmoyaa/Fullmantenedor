import { Component, OnInit } from '@angular/core';
import { PrincipalService } from 'src/app/servicios/principal.service';
import { RegionesService } from 'src/app/servicios/regiones.service';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Validators } from '@angular/forms';
@Component({
  selector: 'app-probando8',
  templateUrl: './probando8.component.html',
  styleUrls: ['./probando8.component.scss'],
})
export class Probando8Component implements OnInit {
  miFormulario!: FormGroup;

  reparticiones: any[] = [];
  comunas: any[] = [];
  sectores: any[] = [];

  selectedReparticion: number | null = null;
  selectedComuna: number | null = null;
  selectedSector: number | null = null;


  
  constructor(private principalService: PrincipalService, private fb: FormBuilder) {


  
  }
  
//   ngOnInit() {
//     this.cargarReparticiones();
//     console.log('Reparticiones cargadas:', this.reparticiones);  // Verifica que las reparticiones estén correctas
//     this.principalService.listarcomunas().subscribe(data => {
//       console.log('Comunas iniciales:', data);
//     });
//   }
//   cargarReparticiones(): void {
//     this.principalService.listarreparticiones().subscribe({
//       next: (data) => {
//         console.log('Reparticiones cargadas:', data);
//         this.reparticiones = data;
//       },
//       error: (err) => console.error('Error al cargar reparticiones:', err)
//     });
//   }


// onReparticionChange(): void {
//   console.log('Repartición seleccionada (valor):', this.selectedReparticion); // Verifica el valor aquí
//   this.comunas = [];
//   this.sectores = [];
//   this.selectedComuna = null;
//   this.selectedSector = null;

//   if (this.selectedReparticion !== null && this.selectedReparticion !== undefined) {
//     this.principalService.obtenerComunasPorReparticion(this.selectedReparticion).subscribe({
//       next: (data) => {
//         console.log('Comunas recibidas:', data);
//         this.comunas = data;
//       },
//       error: (err) => {
//         console.error('Error al obtener comunas:', err);
//         this.comunas = [];
//       }
//     });
//   }
// }
//   onComunaChange(): void {
//     this.sectores = [];
//     this.selectedSector = null;

//     if (this.selectedComuna !== null) {
//       this.principalService.obtenerSectoresPorComuna(this.selectedComuna).subscribe({
//         next: (data) => this.sectores = data,
//         error: (err) => console.error('Error al obtener sectores:', err)
//       });
//     }
//   }
// }
ngOnInit(): void {
  this.miFormulario = this.fb.group({
    reparticion: [null, Validators.required],
    comuna: [{ value: null, disabled: true }, Validators.required],
    sector: [{ value: null, disabled: true }, Validators.required],
  });

  this.cargarReparticiones();
}

cargarReparticiones(): void {
  this.principalService.listarreparticiones().subscribe(data => {
    this.reparticiones = data;
  });
}

onReparticionChange(): void {
  const id = this.miFormulario.get('reparticion')?.value;

  this.principalService.obtenerComunasPorReparticion(id).subscribe(data => {
    this.comunas = data;

    // Reset and enable comuna
    this.miFormulario.patchValue({ comuna: null, sector: null });
    this.miFormulario.get('comuna')?.enable();
    this.miFormulario.get('sector')?.disable();
  });
}
onComunaChange(): void {
  const id = this.miFormulario.get('comuna')?.value;

  this.principalService.obtenerSectoresPorComuna(id).subscribe(data => {
    this.sectores = data;

    this.miFormulario.patchValue({ sector: null });
    this.miFormulario.get('sector')?.enable();
  });
}

onSubmit(): void {
  if (this.miFormulario.valid) {
    const formData = this.miFormulario.value;
    console.log('Enviando datos al backend:', formData);
    // Aquí iría tu servicio para guardar si lo implementas
    // this.servicio.guardarDatos(formData).subscribe(...)
  } else {
    this.miFormulario.markAllAsTouched();
  }
}
}