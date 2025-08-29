import { Component } from '@angular/core';
import { CardTutorialType } from '../../classes/card-tutorial';
import { Card } from '../../components/card/card';

@Component({
  selector: 'app-tutoriales',
  imports: [Card],
  templateUrl: './tutoriales.html',
  styleUrl: './tutoriales.css',
})
export class Tutoriales {
  card1: CardTutorialType = {
    titulo: 'Algo',
    descripcion: 'Texto',
    imagen:
      'https://upload.wikimedia.org/wikipedia/commons/4/4a/SpaceX_Starship_ignition_during_IFT-5.jpg',
    textoUrl: 'starship',
    url: '/',
  };
  card2: CardTutorialType = {
    titulo: 'Algo',
    descripcion: 'Texto',
    imagen:
      'https://upload.wikimedia.org/wikipedia/commons/4/4a/SpaceX_Starship_ignition_during_IFT-5.jpg',
    textoUrl: 'starship',
    url: '/',
  };
  card3: CardTutorialType = {
    titulo: 'Algo',
    descripcion: 'Texto',
    imagen:
      'https://upload.wikimedia.org/wikipedia/commons/4/4a/SpaceX_Starship_ignition_during_IFT-5.jpg',
    textoUrl: 'starship',
    url: '/',
  };
  card4: CardTutorialType = {
    titulo: 'Algo',
    descripcion: 'Texto',
    imagen:
      'https://upload.wikimedia.org/wikipedia/commons/4/4a/SpaceX_Starship_ignition_during_IFT-5.jpg',
    textoUrl: 'starship',
    url: '/',
  };
}
