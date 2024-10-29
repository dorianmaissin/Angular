import { Injectable } from '@angular/core';
import * as ccxt from 'ccxt';

@Injectable({
  providedIn: 'root'
})

export class CrypoPriceService {

  exchange = new ccxt.bybit()



  btcPrice = 0
  ethPrice = 0

  constructor() {
    setInterval(()=> {
      let data = this.fetctPrice("BTCUSDT")
      // this.fetctPrice(this.ethPrice,"ETHUSDT")
    },1000)

   }

  async fetctPrice(symbol:string) {
     const data = await this.exchange.fetchOHLCV(symbol,"3m")
     this.btcPrice = Number(data[199][4])
     console.log(data)
  }
  

}
