import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Aptitudes } from '../model/aptitudes';

@Injectable({
  providedIn: 'root'
})
export class AptitudesService {
  url= "https://finalbackend-flrz.onrender.com/aptitudes"
  
  constructor(private httpClient:HttpClient) { }

  public verAptitudes(): Observable<Aptitudes[]> {
    return this.httpClient.get<Aptitudes[]>(this.url + '/lista')
  }

  public verAptitud(id:number): Observable<Aptitudes> {
    return this.httpClient.get<Aptitudes>(this.url + `/ver/${id}`)
  }

  public agregarAptitudes(aptitudes:Aptitudes): Observable<any> {
    return this.httpClient.post<any>(this.url + '/crear', aptitudes)
  }

  public editarAptitudes(aptitudes:Aptitudes): Observable<any> {
    return this.httpClient.put<any>(this.url + '/editar', aptitudes)
  }

  public eliminarAptitudes(id:number): Observable<any> {
    return this.httpClient.delete<any>(this.url + `/eliminar/${id}`)
  }

}
