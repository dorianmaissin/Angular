import { Component, input, Output, output } from '@angular/core';
import { Input } from '@angular/core';
import { EventEmitter } from '@angular/core';
@Component({
  selector: 'app-house-card',
  standalone: true,
  imports: [],
  templateUrl: './house-card.component.html',
  styleUrl: './house-card.component.css'
})

export class HouseCardComponent {

  buyHouse(para=Object) {
    this.newItemEvent.emit(para)
  }

  @Input()
   house: any;

  @Output("ok")
    newItemEvent = new EventEmitter()
  }

  
