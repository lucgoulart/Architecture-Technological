import { Component } from '@angular/core';

@Component({
  selector: 'app-parceiros',
  templateUrl: './parceiros.component.html',
  styleUrls: ['./parceiros.component.scss']
})
export class ParceirosComponent {

showModal = false;
parceiros = [
  {
    nome: 'TechSoft',
    logo: 'assets/logo-technology-architecture.png',
    bgColor: '#e1f5fe',
    link: 'https://www.techsoft.com'
  },
  {
    nome: 'BuildCode',
    logo: 'assets/parceiros/buildcode-logo.png',
    bgColor: '#f1f8e9',
    link: 'https://www.buildcode.com'
  },
  {
    nome: 'InovaWeb',
    logo: 'assets/parceiros/inovaweb-logo.png',
    bgColor: '#fce4ec',
    link: 'https://www.inovaweb.com.br'
  },
  {
    nome: 'NextCloud',
    logo: 'assets/parceiros/nextcloud-logo.png',
    bgColor: '#ede7f6',
    link: 'https://www.nextcloud.com'
  },

    {
    nome: 'NextCloud',
    logo: 'assets/parceiros/nextcloud-logo.png',
    bgColor: '#ede7f6',
    link: 'https://www.nextcloud.com'
  },

    {
    nome: 'NextCloud',
    logo: 'assets/parceiros/nextcloud-logo.png',
    bgColor: '#ede7f6',
    link: 'https://www.nextcloud.com'
  },

    {
    nome: 'NextCloud',
    logo: 'assets/parceiros/nextcloud-logo.png',
    bgColor: '#ede7f6',
    link: 'https://www.nextcloud.com'
  },
    {
    nome: 'NextCloud',
    logo: 'assets/parceiros/nextcloud-logo.png',
    bgColor: '#ede7f6',
    link: 'https://www.nextcloud.com'
  },

  {
    nome: 'NextCloud',
    logo: 'assets/parceiros/nextcloud-logo.png',
    bgColor: '#ede7f6',
    link: 'https://www.nextcloud.com'
  },

  {
    nome: 'NextCloud',
    logo: 'assets/parceiros/nextcloud-logo.png',
    bgColor: '#ede7f6',
    link: 'https://www.nextcloud.com'
  },

  {
    nome: 'NextCloud',
    logo: 'assets/parceiros/nextcloud-logo.png',
    bgColor: '#ede7f6',
    link: 'https://www.nextcloud.com'
  },

  {
    nome: 'NextCloud',
    logo: 'assets/parceiros/nextcloud-logo.png',
    bgColor: '#ede7f6',
    link: 'https://www.nextcloud.com'
  },

  {
    nome: 'NextCloud',
    logo: 'assets/parceiros/nextcloud-logo.png',
    bgColor: '#ede7f6',
    link: 'https://www.nextcloud.com'
  },

  {
    nome: 'NextCloud',
    logo: 'assets/parceiros/nextcloud-logo.png',
    bgColor: '#ede7f6',
    link: 'https://www.nextcloud.com'
  },

  {
    nome: 'NextCloud',
    logo: 'assets/parceiros/nextcloud-logo.png',
    bgColor: '#ede7f6',
    link: 'https://www.nextcloud.com'
  },
  // continue...
];

 ngOnInit(): void {
    this.showModal = true;
  }

  redirectToContato(): void {
    window.location.href = '/contato'; // ou a rota real do seu botão
  }

  /** JSON usado nos breakpoints (1→4 cards) */
  readonly breakpoints = {
    0:   { slidesPerView: 1 },
    600: { slidesPerView: 2 },
    900: { slidesPerView: 3 },
    1200:{ slidesPerView: 4 }
  };
}




