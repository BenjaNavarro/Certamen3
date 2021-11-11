import { Component, OnInit } from '@angular/core';
import { listaPersonas } from '../persona';

@Component({
  selector: 'app-vista',
  templateUrl: './vista.component.html',
  styleUrls: ['./vista.component.scss']
})
export class VistaComponent implements OnInit {

  listaPersonas = listaPersonas

  constructor() { }

  ngOnInit(): void {
  }

}
