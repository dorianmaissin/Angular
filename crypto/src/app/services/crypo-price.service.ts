import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import * as ccxt from 'ccxt';
import { Observable, timeInterval } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class CrypoPriceService {

  exchange = new ccxt.bybit()

  btcPrice: any  
  ethPrice = 0
  bitcoinData: any

  constructor(
    public http: HttpClient
  ) {}

  async fetctPrice(symbol:string) {
     const data = await this.exchange.fetchOHLCV(symbol,"1m")
    //  this.btcPrice = Number(data[199][4])
    //  this.bitcoinData = data
    return data[data.length - 1]
  }

  fetchData() {
    return this.http.get<any[]>("http://localhost:3000/bitcoin")
  } 

  $value = new Observable<any>((observer) => {
		setInterval(async () => {
			this.btcPrice = await this.fetctPrice("BTCUSDT");
			observer.next(this.btcPrice);
      this.btcPrice = this.btcPrice[4]
		}, 2000);
	})
}
