import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-contato',
  templateUrl: './contato.component.html',
  styleUrls: ['./contato.component.scss']
})
export class ContatoComponent implements OnInit {

  contatoForm = this.fb.group({
  nome: ['', Validators.required],
  email: ['', [Validators.required, Validators.email]],
  telefone: [''],
  mensagem: ['', Validators.required]
});

constructor(private fb: FormBuilder) {}

enviarMensagem() {
  if (this.contatoForm.valid) {
    console.log(this.contatoForm.value);
    // Aqui você pode chamar um serviço de email, Firebase, ou API
  }
}

ngOnInit(): void {

}
}
