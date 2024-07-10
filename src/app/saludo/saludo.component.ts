import { Component } from '@angular/core';

@Component({
  selector: 'app-saludo',
  templateUrl: './saludo.component.html',
  styleUrls: ['./saludo.component.css']
})
export class SaludoComponent {
  saludo: string = '¡Hola, Angular!';
  nombreYapellido: string = 'Sergio Garcia'

  constructor() { }

  ngOnInit(): void {
  }


}
