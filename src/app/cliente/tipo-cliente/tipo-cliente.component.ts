import { Component, OnInit, Input, Output } from '@angular/core';
import { TipoPessoa } from '../tipo-pessoa';

@Component({
  selector: 'app-tipo-cliente',
  templateUrl: './tipo-cliente.component.html',
  styleUrls: ['./tipo-cliente.component.css']
})
export class TipoClienteComponent implements OnInit {

  @Input() tipoPessoa : TipoPessoa;
  //@Output() tipoPessoa : TipoPessoa;
  constructor() { }

  ngOnInit() {
  }

}
