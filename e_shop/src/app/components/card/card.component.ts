import { Component } from '@angular/core';
import { Input } from '@angular/core';
import { Output } from '@angular/core';
import { EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-card',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './card.component.html',
  styleUrl: './card.component.css'
})
export class CardComponent {

  buy(para:Object) {
    this.artChoice.emit(para)
  }

  hideSignal(para:Object) {
    this.hide.emit(para)
  }

  @Input()
  article: any;

  @Output("art-choice")
  artChoice = new EventEmitter()

  @Output("hide")
  hide = new EventEmitter()
}
