import { Component } from '@angular/core';
import { HouseCardComponent } from '../house-card/house-card.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-body',
  standalone: true,
  imports: [HouseCardComponent, CommonModule],
  templateUrl: './body.component.html',
  styleUrl: './body.component.css'
})
export class BodyComponent {
  
  signal(house=Object) {
    console.log('A house as been bought', house)
  }


  houses = [
    {
    name : 'A frame',
    describe : 'Small A frame house from canada',
    ImageLink : 'https://res.cloudinary.com/brickandbatten/image/upload/c_scale,w_761,h_739,dpr_1.25/f_auto,q_auto/v1642791216/wordpress_assets/58674-IronMtn_A.jpg?_i=AA',
    price : '100000 $'
    },
    {
    name : 'B frame',
    describe : 'Small A frame house from canada',
    ImageLink : 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQQIuv-IpXlpw214RqOB6TKAI3hkjc3EmdENA&s',
    price : '100000 $'
    } 
    ,
    {
    name : 'B frame',
    describe : 'Small A frame house from canada',
    ImageLink : 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQQIuv-IpXlpw214RqOB6TKAI3hkjc3EmdENA&s',
    price : '100000 $'
    },
    {
    name : 'A frame',
    describe : 'Small A frame house from canada',
    ImageLink : 'https://res.cloudinary.com/brickandbatten/image/upload/c_scale,w_761,h_739,dpr_1.25/f_auto,q_auto/v1642791216/wordpress_assets/58674-IronMtn_A.jpg?_i=AA',
    price : '100000 $'
    },
    {
    name : 'B frame',
    describe : 'Small A frame house from canada',
    ImageLink : 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQQIuv-IpXlpw214RqOB6TKAI3hkjc3EmdENA&s',
    price : '100000 $'
    } 
    ,
    {
    name : 'B frame',
    describe : 'Small A frame house from canada',
    ImageLink : 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQQIuv-IpXlpw214RqOB6TKAI3hkjc3EmdENA&s',
    price : '100000 $'
    } 
]
}
