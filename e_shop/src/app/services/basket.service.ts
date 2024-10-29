import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class BasketService {

  baskets :any[] = []

  total : any

  buySignal(para: any) {
    // Find the item in the baskets array that matches the id of `para`
    const existingItem = this.baskets.find(item => item.id === para.id);

    if (existingItem) {
      existingItem.quantity += 1;
    } else {
      this.baskets.push({ ...para, quantity: 1 });
    }
    this.totalBasketChanges();
  }

  handleIncreament(para:any) {
    this.buySignal(para)
  }

  handleDecreament(para:any) {
    const existingItem = this.baskets.find(item => item.id === para.id);

    if (existingItem.quantity <= 0) {
      this.removeItem(para)
    }
    else {
      existingItem.quantity -= 1;
    }
  }

  removeItem(id:any){
    this.baskets = this.baskets.filter(item => item.id !== id)
    this.totalBasketChanges()
  }

  totalBasketChanges(): void {
    this.total = this.baskets.reduce((accumulator, item) => accumulator + item.price, 0);
  }

  constructor() { }
}
