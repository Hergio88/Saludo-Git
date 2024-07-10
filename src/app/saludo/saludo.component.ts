import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-saludo',
  templateUrl: './saludo.component.html',
  styleUrls: ['./saludo.component.css']
})
export class SaludoComponent implements OnInit {

  @Input() mostrarSaludo: boolean = false;

  nombreYapellido: string = 'Sergio Garcia'

  constructor() { }

  ngOnInit(): void {
  }



}
