import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'calculadora';

  display: string = ''; // Variable para mostrar números y operador en el display
  resultado: number = 0;
  historial: string[] = []; // Arreglo para almacenar el historial de operaciones

  sumar(): void {
    try {
      // Evaluar la expresión y obtener el resultado
      this.resultado = eval(this.display);

      // Agregar la expresión y el resultado al historial
      this.historial.push(`${this.display} = ${this.resultado}`);

      // Limpiar el display de entrada
      this.display = '';
    } catch (error) {
      console.error('Error al evaluar la expresión:', error);
      this.resultado = 0; // En caso de error, establecer el resultado a 0
    }}

  asignarNumero(numero: number): void {
    // Concatenar el número al display
    this.display += numero;
  }

  agregarComa(): void {
    // Concatenar una coma al display
    this.display += '.';
  }
  

  asignarOperador(operador: string): void {
    
    // Concatenar el operador al display
    this.display += '' + operador + '';
  }

  borrar(): void {
    // Limpiar el display y restablecer el resultado
    this.display = '';
    this.resultado = 0;
  }

  eliminarUltimoCaracter(): void {
    // Eliminar el último carácter del display
    this.display = this.display.slice(0, -1);
  }
}