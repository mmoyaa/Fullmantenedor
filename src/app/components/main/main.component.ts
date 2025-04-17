import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { SharedDataService } from '../../services/shared-data.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent {

  constructor(private sharedData: SharedDataService, private router: Router) {}

  nuevo() {
    this.sharedData.clearFormData(); // Limpiar datos
    this.router.navigate(['/modulo']); // Ir al módulo vacío
  }

  buscar() {
    // Simulación de búsqueda (en un caso real, podría hacerse una petición HTTP)
    const datosEjemplo = {
      nombre: 'Michael',
      edad: 30,
      ciudad: 'San Antonio'
    };
    
    this.sharedData.setFormData(datosEjemplo); // Cargar datos
    this.router.navigate(['/modulo']); // Ir al módulo con datos cargados
  }
}
