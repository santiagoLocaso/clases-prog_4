import { Component, input, SimpleChange } from '@angular/core';
import { CardTutorialType } from '../../classes/card-tutorial';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-card',
  imports: [RouterLink],
  templateUrl: './card.html',
  styleUrl: './card.css',
})
export class Card {
  card = input<CardTutorialType>();

  ngOnChanges(changes: SimpleChange): void {
    console.log(changes);
  }
}
