import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-pagina-inicial',
  templateUrl: './pagina-inicial.component.html',
  styleUrls: ['./pagina-inicial.component.scss']
})
export class PaginaInicialComponent implements OnInit {
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
  }

    ngAfterViewInit(): void {
    const video = this.bgVideo.nativeElement;
    video.muted = true;
    video.play().catch(err => {
      console.warn('Falha ao iniciar o vídeo:', err);
    });
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
}
