import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Observable } from 'rxjs';
import { PrincipalService } from 'src/app/servicios/principal.service';
@Component({
  selector: 'app-probando10',
  templateUrl: './probando10.component.html',
  styleUrls: ['./probando10.component.scss']
})
export class Probando10Component implements OnInit {
  formulario: FormGroup;
  isCalendarioHabilitado: boolean = false;
  
  comunas: any[] = [];

  ngOnInit(): void {
    this.principalService.getcomunas().subscribe(data => {
      this.comunas = data;
      console.log(this.comunas);
    });
  }



  constructor(private fb: FormBuilder,private principalService:PrincipalService) {
    this.formulario = this.fb.group({
      opcion1: ['si'],  // Valor por defecto
      fecha1: [{ value: '', disabled: false }],
      opcion2: ['no'],
      fecha2: [{ value: '', disabled: true }],
      opcion3: ['no'],
      fecha3: [{ value: '', disabled: true }]
    });
  }




  onOpcionChange(opcionIndex: number) {
    const opcion = this.formulario.get(`opcion${opcionIndex}`)?.value;

    if (opcion === 'si') {
      this.formulario.get(`fecha${opcionIndex}`)?.enable();
    } else {
      this.formulario.get(`fecha${opcionIndex}`)?.disable();
    }
  }
}
