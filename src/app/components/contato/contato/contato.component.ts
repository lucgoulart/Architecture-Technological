import { Component } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Component({
  selector: 'app-contato',
  templateUrl: './contato.component.html',
  styleUrls: ['./contato.component.scss']
})
export class ContatoComponent {

  formData = {
    nome: '',
    email: '',
    telefone: '',
    mensagem: ''
  };

  mostrarModal = false;
  mensagemModal = '';
  tipoModal: 'sucesso' | 'erro' = 'sucesso';

  constructor(private http: HttpClient) {}

  enviarFormulario() {
    const url = 'https://formsubmit.co/ajax/lucasgoulart2025@outlook.com';
    const headers = new HttpHeaders({'Content-Type': 'application/json'});

    this.http.post(url, this.formData, { headers }).subscribe({
      next: () => {
        this.tipoModal = 'sucesso';
        this.mensagemModal = 'Mensagem enviada com sucesso!';
        this.mostrarModal = true;
        this.limparFormulario();
      },
      error: () => {
        this.tipoModal = 'erro';
        this.mensagemModal = 'Erro ao enviar mensagem. Tente novamente mais tarde.';
        this.mostrarModal = true;
      }
    });
  }

  limparFormulario() {
    this.formData = {
      nome: '',
      email: '',
      telefone: '',
      mensagem: ''
    };
  }

  fecharModal() {
    this.mostrarModal = false;
  }
}
