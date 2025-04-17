import { Component, OnInit } from '@angular/core';
import { SharedDataService } from '../../services/shared-data.service';
@Component({
  selector: 'app-modulo',
  templateUrl: './modulo.component.html',
  styleUrls: ['./modulo.component.scss']
})
export class ModuloComponent implements OnInit {
  datos: any = {};

  constructor(private sharedData: SharedDataService) {}

  ngOnInit() {
    this.datos = this.sharedData.getFormData(); // Cargar datos al iniciar
  }
}