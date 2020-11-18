import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-calcular',
  templateUrl: './calcular.component.html',
  styleUrls: ['./calcular.component.css']
})
export class CalcularComponent implements OnInit {
  litro:number;
  km:number;
  resultado:number;
  constructor() {
    this.litro = 0;
    this.km = 0;
    this.resultado = 0;
   }

  ngOnInit(): void {
  }

  calcularGasto():void{
    this.resultado = this.km / this.litro
  };

}
