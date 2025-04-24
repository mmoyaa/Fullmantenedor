import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PrincipalService {

   private apiUrl1 = 'http://localhost:3000/comunas';  
 
   constructor(private http: HttpClient) { }




  // listarreparticiones(): Observable<any[]> {
  //   return this.http.get<any[]>('http://localhost:3000/reparticiones/listar');
  // }
   listarcomunas(): Observable<any[]> {
    return this.http.get<any[]>('http://localhost:3000/comunas/listar');
    
  }



  listarsectores(): Observable<any[]> {
    return this.http.get<any[]>('http://localhost:3000/sectores/listar');
  }


  listarreparticiones(): Observable<any[]> {
    return this.http.get<any[]>('http://localhost:3000/reparticiones/listar');
  }
  
  // obtenerComunasPorReparticion(id: number): Observable<any[]> {
  //   return this.http.get<any[]>(`http://localhost:3000/comunas/por-reparticion/${id}`);
  // }
  


  obtenerComunasPorReparticion(id: number): Observable<any[]> {
    console.log('Obteniendo comunas para la repartición con id:', id);
    return this.http.get<any[]>(`http://localhost:3000/comunas/por-reparticion/${id}`);
  }
  obtenerSectoresPorComuna(id: number): Observable<any[]> {
    return this.http.get<any[]>(`http://localhost:3000/sectores/por-comuna/${id}`);
  }

}
