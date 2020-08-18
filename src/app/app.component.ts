import { Component } from '@angular/core';
import { promise } from 'protractor';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  
  nombre: string = 'Capitán América';
  nombre2: string = 'dANIel maRDONEs aGuAYo';
  arreglo:string[] = ['Aquaman', 'Batman', 'Spiderman', 'Wolverine', 'Flash', 'Hulk', 'Daredevil'];
  PI:number = Math.PI;
  porcentaje:number = 0.234;
  salario:number = 1234.5;
  fecha: Date = new Date();
  idioma:string = 'es';

  valorPromesa = new Promise<string>((resolve) => {
    
    setTimeout(() => {
      resolve('llego la data');
    },4500);
    
  });

  heroe = {
    nombre: 'logan',
    clave: 'Wolvering',
    edad: 500,
    direccion:{
      calle: 'Primera',
      casa: 20 
    }
  }

  setIdioma(idioma:string){
    this.idioma = idioma;
  }
}
