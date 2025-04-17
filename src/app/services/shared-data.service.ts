import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SharedDataService {
  private formData: any = {}; // Variable para almacenar datos compartidos

  constructor() {}

  // Método para establecer los datos
  setFormData(data: any) {
    this.formData = data;
  }

  // Método para obtener los datos
  getFormData() {
    return this.formData;
  }

  // Método para limpiar los datos
  clearFormData() {
    this.formData = {};
  }
}