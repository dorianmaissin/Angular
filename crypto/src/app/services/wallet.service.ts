import { Injectable } from '@angular/core';
import { CrypoPriceService } from './crypo-price.service'; 

@Injectable({
  providedIn: 'root'
})

export class WalletService {

  constructor(
    public priceData : CrypoPriceService
  ) {}

  wallet = 1000
  position = 300
  btcQtd: any

  assets: any[] = []

  handleBuy() {
    if (this.wallet > this.position) {
      this.wallet = this.wallet - this.position
      this.btcQtd = this.position / this.priceData.btcPrice
      this.assets.push(this.btcQtd)
    }
  }

  handleSell() {
  if (this.assets.length > 0) {
    // Get the last BTC quantity added
    this.btcQtd = this.assets.pop(); // Pop last BTC from assets for selling
    
    // Calculate amount to add to wallet based on current BTC price
    const amount = this.btcQtd * this.priceData.btcPrice;
    
    // Update wallet balance
    this.wallet += amount;
    
    // Reset btcQtd after selling
    this.btcQtd = 0;
  }
}

}
