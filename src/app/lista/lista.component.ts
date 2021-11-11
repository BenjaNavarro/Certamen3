import { Component, OnInit } from '@angular/core';
import { listaPersonas } from '../persona';

@Component({
  selector: 'app-lista',
  templateUrl: './lista.component.html',
  styleUrls: ['./lista.component.scss']
})
export class ListaComponent implements OnInit {

  listaPersonas = listaPersonas

  constructor() { }

  ngOnInit(): void {
  }

}
