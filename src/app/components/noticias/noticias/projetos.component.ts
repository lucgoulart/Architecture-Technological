import { Component, OnInit } from '@angular/core';

interface Projeto {
  nome: string;
  imagem: string;
  status: 'finalizado' | 'andamento';
  link?: string;
}

@Component({
  selector: 'app-projetos',
  templateUrl: './projetos.component.html',
  styleUrls: ['./projetos.component.scss']
})
export class ProjetosComponent implements OnInit {
  projetos: Projeto[] = [
    {
      nome: 'Site Alpha',
      imagem: 'assets/projetos/alpha.png',
      status: 'finalizado',
      link: 'https://site-alpha.com'
    },
    {
      nome: 'Landing Beta',
      imagem: 'assets/projetos/beta.png',
      status: 'andamento'
    },
    {
      nome: 'Loja Gamma',
      imagem: 'assets/projetos/gamma.png',
      status: 'finalizado',
      link: 'https://loja-gamma.com'
    }
  ];

  currentIndex = 0;
  intervalId: any;

  ngOnInit(): void {
    this.startAutoSlide();
  }

  /** Inicia o carrossel automático */
  startAutoSlide() {
    this.intervalId = setInterval(() => {
      this.next();
    }, 4000);
  }

  /** Para o carrossel ao passar o mouse */
  stopAutoSlide() {
    clearInterval(this.intervalId);
  }

  /** Vai para o próximo projeto */
  next() {
    this.currentIndex = (this.currentIndex + 1) % this.projetos.length;
  }

  /** Volta para o projeto anterior */
  prev() {
    this.currentIndex = (this.currentIndex - 1 + this.projetos.length) % this.projetos.length;
  }

  /** Redireciona para a página de contato */
  goToContato() {
    window.location.href = '/contato';
  }
}
