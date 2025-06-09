import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Observable } from 'rxjs';
import { PrincipalService } from 'src/app/servicios/principal.service';
@Component({
  selector: 'app-probando10',
  templateUrl: './probando10.component.html',
  styleUrls: ['./probando10.component.scss']
})
export class Probando10Component implements OnInit {
  comunaForm!: FormGroup;  // <- importante para evitar error de inicialización
  comunas: any[] = [];
    
  mensaje: string = '';

 constructor(private principalService: PrincipalService, private fb: FormBuilder) {
    this.comunaForm = this.fb.group({
      nombre: ['', Validators.required],
      region: ['', Validators.required]
    });
  }
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }

onSubmit(): void {
  if (this.comunaForm.valid) {
    console.log('Datos enviados:', this.comunaForm.value); // 👈 VERIFICA QUÉ DATOS SE ENVIAN
    this.principalService.addComuna(this.comunaForm.value).subscribe({
      next: (res) => {
        this.mensaje = 'Comuna agregada exitosamente.';
        this.comunaForm.reset();
      },
      error: (err) => {
        console.error(err);
        this.mensaje = 'Error al agregar la comuna.';
      }
    });
  }







  }
agregarComuna(): void {
  if (this.comunaForm.valid) {
    const nuevaComuna = this.comunaForm.value;
    console.log('Datos enviados:', nuevaComuna); // <-- aquí
    this.principalService.addComuna(nuevaComuna).subscribe(
      response => {
        this.comunas.push(response);
        this.comunaForm.reset();
      },
      error => {
        console.error('Error al guardar comuna:', error);
      }
    );
  }
}



}