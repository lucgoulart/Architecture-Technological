import { Component, OnInit } from '@angular/core';

interface Projeto {
  nome: string;
  imagem: string;
  status: 'finalizado' | 'andamento';
  sobre: string;
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
      nome: 'DGA Logística',
      imagem: 'assets/dga-log-st.png',
      status: 'finalizado',
      sobre: 'Aplicação web desenvolvida em Angular com foco em performance, usabilidade e escalabilidade. O site é responsivo, mobile-first e otimizado para carregamento rápido. Tecnologias utilizadas incluem Angular 16, SCSS modular, lazy loading e SEO básico. Integração com Google Analytics e estrutura preparada para ambiente em nuvem com HTTPS. Projeto finalizado com foco em acessibilidade, design moderno e fácil gerenciamento de conteúdo.',
      link: 'https://dgalogistica.com'
    },

    {
      nome: 'Style Makers',
      imagem: 'assets/style-mk.png',
      status: 'andamento',
      sobre: 'Site institucional desenvolvido com foco em moda, estilo e experiência visual. Utilizamos Angular para construção do frontend com SCSS modular e design totalmente responsivo. O projeto prioriza performance e estética, com carregamento otimizado de imagens, animações suaves e estrutura mobile-first. O layout valoriza a identidade visual da marca e proporciona uma navegação fluida para apresentar produtos, serviços e portfólio de forma elegante e funcional.',
      link: 'https://stylemakers.com.br' // substitua com o link real, se diferente
    },

    {
      nome: 'Portfólio pessoal',
      imagem: 'assets/portfolio-pessoal.png',
      status: 'finalizado',
      sobre: 'Projeto desenvolvido com foco na apresentação profissional de desenvolvedores e criativos. Construído com tecnologias modernas e hospedado gratuitamente no GitHub Pages, garantindo domínio personalizado e zero custo de hospedagem. A Architecture Technological oferece esse tipo de portfólio com total suporte técnico, sem cobrança de servidor, aproveitando soluções confiáveis e escaláveis para presença digital eficiente.',
      link: 'https://lucgoulart.github.io/personal-portfolio/index.html'
    },

    {
      nome: 'Varal das Grifes',
      imagem: 'assets/varal-grif.png',
      status: 'andamento',
      sobre: 'Loja virtual desenvolvida com foco em experiência do usuário, identidade visual e facilidade de navegação. O projeto conta com layout moderno e responsivo, otimizando a visualização dos produtos em qualquer dispositivo. Implementamos filtros de busca, categorização de peças e botão direto para contato via WhatsApp. Toda a solução foi construída com base nas necessidades da marca, com hospedagem estratégica e baixo custo de manutenção. Ideal para lojistas que buscam presença digital profissional e funcional.',
      link: 'https://lucgoulart.github.io/personal-portfolio/index.html' // substitua pelo link real do projeto Varal das Grifes, se houver
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
    }, 9000);
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



