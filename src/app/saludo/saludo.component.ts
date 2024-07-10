import { Component } from '@angular/core';

@Component({
  selector: 'app-saludo',
  templateUrl: './saludo.component.html',
  styleUrls: ['./saludo.component.css']
})
export class SaludoComponent {
  saludo: string = '¡Hola, Angular!';
  Nombre = 'Sergio Garcia'

  constructor() { }

  ngOnInit(): void {
  }


}
