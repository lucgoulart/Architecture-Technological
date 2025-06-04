import { Component } from '@angular/core';

@Component({
  selector: 'app-parceiros',
  templateUrl: './parceiros.component.html',
  styleUrls: ['./parceiros.component.scss'],
})
export class ParceirosComponent {
  parceiros = [
    { nome: 'Microsoft', logo: 'assets/parceiros/microsoft.png' },
    { nome: 'Google', logo: 'assets/parceiros/google.png' },
    { nome: 'Adobe', logo: 'assets/parceiros/adobe.png' },
    { nome: 'HubSpot', logo: 'assets/parceiros/hubspot.png' },
    // Adicione mais parceiros conforme necessário
  ];
}
