import { Component, OnChanges, SimpleChanges } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardComponent } from '../card/card.component';
import { ItemsService } from '../../services/items.service';
import { BasketService } from '../../services/basket.service';

@Component({
  selector: 'app-body',
  standalone: true,
  imports: [CardComponent, CommonModule],
  templateUrl: './body.component.html',
  styleUrl: './body.component.css'
})

export class BodyComponent {

  constructor(
    public items: ItemsService,
    public basket: BasketService
  ) {}

}
