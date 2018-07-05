import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { TipoPessoa } from '../tipo-pessoa';



@Component({
  selector: 'app-tipo-pessoa',
  templateUrl: './tipo-pessoa.component.html',
  styleUrls: ['./tipo-pessoa.component.css']
})
export class TipoPessoaComponent implements OnInit {

  @Input () tipoPessoa: TipoPessoa;
  @Output () tipoPessoaChange: EventEmitter<TipoPessoa> = new EventEmitter<TipoPessoa>();

  listaTipoPessoa = [
    { Codigo: TipoPessoa.Fisica, descricao : "Fisica"  },
    { Codigo: TipoPessoa.Juridica, descricao : "Jurídica"  },
    { Codigo: TipoPessoa.Outros, descricao : "Outros"  }
  ]
  
  constructor() { }

  ngOnInit() {
  }
 
    
  alterarValor() {
    this.tipoPessoaChange.emit(this.tipoPessoa);
  }

}
