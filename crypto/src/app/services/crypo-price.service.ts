import { Injectable } from '@angular/core';
import * as ccxt from 'ccxt';

@Injectable({
  providedIn: 'root'
})

export class CrypoPriceService {

  exchange = new ccxt.bybit()



  btcPrice = 0
  ethPrice = 0
  bitcoinData: any
//   bitcoinData = [
//     { date: '2024-01-01', price: 16823 },
//     { date: '2024-01-02', price: 17045 },
//     { date: '2024-01-03', price: 17212 },
//     { date: '2024-01-04', price: 17356 },
//     { date: '2024-01-05', price: 17400 },
//     { date: '2024-01-06', price: 17321 },
//     { date: '2024-01-07', price: 17200 },
//     { date: '2024-01-08', price: 17520 },
//     { date: '2024-01-09', price: 17645 },
//     { date: '2024-01-10', price: 17785 },
//     { date: '2024-01-11', price: 17812 },
//     { date: '2024-01-12', price: 17923 },
//     { date: '2024-01-13', price: 17895 },
//     { date: '2024-01-14', price: 17700 },
//     { date: '2024-01-15', price: 17950 },
//     { date: '2024-01-16', price: 18000 },
//     { date: '2024-01-17', price: 18120 },
//     { date: '2024-01-18', price: 18205 },
//     { date: '2024-01-19', price: 18100 },
//     { date: '2024-01-20', price: 18020 },
//     { date: '2024-01-21', price: 17900 },
//     { date: '2024-01-22', price: 17750 },
//     { date: '2024-01-23', price: 17600 },
//     { date: '2024-01-24', price: 17580 },
//     { date: '2024-01-25', price: 17700 },
//     { date: '2024-01-26', price: 17650 },
//     { date: '2024-01-27', price: 17820 },
//     { date: '2024-01-28', price: 17980 },
//     { date: '2024-01-29', price: 18050 },
//     { date: '2024-01-30', price: 18200 },
//     { date: '2024-01-31', price: 18350 }
// ];

  constructor() {
    setInterval(()=> {
      let data = this.fetctPrice("BTCUSDT")
    },1000)

   }

  async fetctPrice(symbol:string) {
     const data = await this.exchange.fetchOHLCV(symbol,"3m")
     this.btcPrice = Number(data[199][4])
     this.bitcoinData = data
  }

  

  convertToBitcoinData(rawData: any[]) {
    return rawData.map(item => {
      const date = new Date(item[0]); // Convert timestamp to Date
      const formattedDate = date.toISOString().split('T')[0]; // Format to 'YYYY-MM-DD'
      const price = item[4]; // Closing price
      return { date: formattedDate, price }; // Return in desired format
    });
  }
  
  

}
