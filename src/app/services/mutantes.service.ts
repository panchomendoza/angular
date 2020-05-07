import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class MutantesService {

  mutantes:any[] = [];

  constructor( private http:HttpClient ) { 

    console.log("Servicio de mutante listo para usar");
  }
  
  cargar_mutantes(){
    this.http.get("assets/data/mutantes.json")
  }

  
}
