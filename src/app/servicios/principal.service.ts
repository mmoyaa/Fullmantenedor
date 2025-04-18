import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PrincipalService {

   private apiUrl1 = 'http://localhost:3000/comunas';  
 
   constructor(private http: HttpClient) { }




   listarcomunas(): Observable<any[]> {
    return this.http.get<any[]>('http://localhost:3000/comunas/listar');
  }


  listarreparticiones(): Observable<any[]> {
    return this.http.get<any[]>('http://localhost:3000/reparticiones/listar');
  }

  listarsectores(): Observable<any[]> {
    return this.http.get<any[]>('http://localhost:3000/sectores/listar');
  }






}
