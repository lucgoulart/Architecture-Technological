import { animate, style, transition, trigger } from '@angular/animations';
import { Component, ElementRef, HostListener, OnInit, QueryList, ViewChild, ViewChildren } from '@angular/core';

@Component({
  selector: 'app-pagina-inicial',
  templateUrl: './pagina-inicial.component.html',
  styleUrls: ['./pagina-inicial.component.scss'],
  animations: [
    trigger('fadeSlideIn', [
      transition(':enter', [
        style({ opacity: 0, transform: 'translateX(-50px)' }),
        animate('600ms ease-out', style({ opacity: 1, transform: 'translateX(0)' }))
      ])
    ])
  ]
})
export class PaginaInicialComponent implements OnInit {

   passos = [
    {
      icone: '01',
      titulo: 'Primeiro Contato',
      descricao: 'Entramos em contato e marcamos uma reunião para entender suas necessidades.'
    },
    {
      icone: '02',
      titulo: 'Montagem da Arquitetura',
      descricao: 'Planejamos a arquitetura do seu site com reuniões entre nossos web designers.'
    },
    {
      icone: '03',
      titulo: 'Desenvolvimento',
      descricao: 'Desenvolvemos uma aplicação totalmente responsiva e inovadora, alinhada com o que foi combinado.'
    },
    {
      icone: '04',
      titulo: 'Prazo e Atualizações',
      descricao: 'Definimos um prazo para entrega e atualizamos você diariamente sobre o progresso.'
    },
    {
      icone: '05',
      titulo: 'Disponibilidade do Cliente',
      descricao: 'O cliente deve estar disponível para reuniões caso seja necessário alinhamento extra.'
    },
    {
      icone: '06',
      titulo: 'Deploy & Testes',
      descricao: 'Realizamos o deploy, testes rigorosos e garantimos que tudo funcione perfeitamente.'
    }
  ];

    @ViewChildren('passoElement') passoElements!: QueryList<ElementRef>;
  visiblePassos: boolean[] = [];
  @ViewChild('bgVideo') bgVideo!: ElementRef<HTMLVideoElement>;

 phrases = [
    'UM SITE PROFISSIONAL',
    'UM E-COMMERCE PODEROSO',
    'TRÁFEGO QUALIFICADO',
    'CONVERSÕES EXPLOSIVAS',
    'UM FUNIL DE VENDAS',
    'CAMPANHAS QUE VENDEM',
    'A MELHOR EXPERIÊNCIA',
    'RESULTADOS REAIS'
  ];
  currentPhraseIndex = 0;
  displayedText = '';
  private index = 0;
  private isDeleting = false;

  constructor() { }

  ngOnInit(): void {
    this.startTyping();
    this.visiblePassos = new Array(this.passos.length).fill(false)
  }

    ngAfterViewInit(): void {
    const video = this.bgVideo.nativeElement;
    video.muted = true;
    video.play().catch(err => {
      console.warn('Falha ao iniciar o vídeo:', err);
    });

       this.checkVisiblePassos();
  }

   startTyping(): void {
    const currentPhrase = this.phrases[this.currentPhraseIndex];
    const speed = this.isDeleting ? 30 : 100; // Velocidades ajustadas

    if (!this.isDeleting) {
      this.displayedText = currentPhrase.substring(0, this.index + 1);
      this.index++;

      if (this.index === currentPhrase.length) {
        setTimeout(() => {
          this.isDeleting = true;
          this.startTyping();
        }, 2000); // Pausa maior após digitar
        return;
      }
    } else {
      this.displayedText = currentPhrase.substring(0, this.index - 1);
      this.index--;

      if (this.index === 0) {
        this.isDeleting = false;
        // Muda para a próxima frase (ou volta para a primeira)
        this.currentPhraseIndex = (this.currentPhraseIndex + 1) % this.phrases.length;
      }
    }

    setTimeout(() => this.startTyping(), speed);
  }

    @HostListener('window:scroll', [])
  onWindowScroll() {
    this.checkVisiblePassos();
  }

  checkVisiblePassos() {
    if (!this.passoElements) return;
    this.passoElements.forEach((el, idx) => {
      const rect = el.nativeElement.getBoundingClientRect();
      if (rect.top < window.innerHeight * 0.85) {
        this.visiblePassos[idx] = true;
      }
    });
  }
}











