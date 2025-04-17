import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RegionesService {

  private apiUrl = 'http://localhost:3000/movimientos';  

  constructor(private http: HttpClient) { }

  getRegiones(): Observable<any> {
    return this.http.get<any>(this.apiUrl);


  
}


eliminarMovimiento(id: number): Observable<any> {
  return this.http.delete<any>(`http://localhost:3000/movimientos/eliminar/${id}`);
}

getmovimientos(): Observable<any> {
  return this.http.get<any>(this.apiUrl);


}

guardarMovimientos(movimientos: any[]): Observable<any> {
  return this.http.post<any>('http://localhost:3000/movimientos/guardar', movimientos, {
    headers: { 'Content-Type': 'application/json' }
  });
}


listarMovimientos(): Observable<any[]> {
  return this.http.get<any[]>('http://localhost:3000/movimientos/listar');
}
}
