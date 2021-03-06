import { Component, OnInit } from '@angular/core';
import { Pessoa } from '../pessoa';
import { TipoPessoa } from '../tipo-pessoa';
import { ClienteService } from '../cliente.service';

@Component({
  selector: 'app-cadastro-cliente',
  templateUrl: './cadastro-cliente.component.html',
  styleUrls: ['./cadastro-cliente.component.css']
})
export class CadastroClienteComponent implements OnInit {

  cliente: string = "Proprietário";
  contador: number = 0;
  imagem : string;
  pessoa: Pessoa;
  pessoas: Pessoa[];
  portecentagemProgresso: number = 0;

  constructor(private svcCliente: ClienteService) { }

  ngOnInit() {
  let self = this;
  
  // setTimeout(() => {
  //   self.cliente = "Proprietario iniciando...";
  //   self.imagem = "assets/Neymar_em_pe.jpg";
  // },1000);

  // let interval = setInterval(() => {
  //   self.cliente = "Proprietario " + self.contador++;
  //   if (self.contador == 5) {
  //     clearInterval(interval);
  //     self.imagem = "assets/Neymar_deitado.jpg";
  //   }
  // },2000);

  if (this.pessoa == null) {
       this.pessoa = new Pessoa();
       this.pessoa.nomePessoa = "Pletsch";
       this.pessoa.tipoPessoa = TipoPessoa.Juridica;
  }

  
  let servicoClientes =  this.svcCliente.getClientes();

  
  this.portecentagemProgresso = 50;
    servicoClientes.subscribe( res => {
      
      this.pessoas = res;
      this.portecentagemProgresso = 100;
      //alert(JSON.stringify(res));
    });

  }

  
  levantarNeymar() {
    this.imagem = "assets/Neymar_em_pe.jpg";
  }
  
  adicionarCliente(){
    let pessoa : Pessoa = {
      nomePessoa : "Neymar",
      tipoPessoa : TipoPessoa.Juridica
    }
    this.pessoas.push(pessoa);
    this.svcCliente.addCliente(pessoa).subscribe(res => {
      console.log(res);
    })      
    
  }
}
