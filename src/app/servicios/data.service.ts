import { Injectable } from '@angular/core';
//suscribirse a los datos y recibir respuesta asincrona
import { Observable } from 'rxjs';
//para poder hacer peticiones
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  //el primer http es el ALIAS
  constructor(private http:HttpClient) { }

  //método o función observable q devuelve los datos
  getDatos():Observable<any> {
    return this.http.get('./assets/json/data.json')
  }
}
