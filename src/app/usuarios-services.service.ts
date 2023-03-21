import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { environment } from "../environments/environment"
@Injectable({
  providedIn: 'root'
})
export class UsuariosServicesService {

  private urlListar = 'listarUsuarios';
  private urlUsuario = 'listarUsuario/';
  private urlCrear = 'crearUsuario';
  private urlEditar = 'updateUsuario';
  private urlDelete = 'deleteUsuario/';
 
  constructor( private http: HttpClient) { }

  listUsuarios(): Observable<any> {
    return this.http.get<any>(environment.urlApiBase+this.urlListar)
  }
  UsuariosById(id: string): Observable<any> {
    return this.http.get<any>(environment.urlApiBase+this.urlUsuario+id)
  }
  crearUsuario(bodyArchivo: any): Observable<any> {
    return this.http.post<any>(environment.urlApiBase+this.urlCrear, bodyArchivo);
  }
 editarUsuario (bodyArchivo: any): Observable<any> {
    return this.http.post<any>(environment.urlApiBase+this.urlEditar, bodyArchivo);
  }
  deleteUsuario (id: any): Observable<any> {
    return this.http.delete<any>(environment.urlApiBase+this.urlDelete+id);
  }
  
}
