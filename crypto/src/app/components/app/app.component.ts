import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { WalletComponent } from '../wallet/wallet.component';
import { PriceDataComponent } from '../price-data/price-data.component';
import { BtcchartComponent } from '../btc-chart/btc-chart.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,WalletComponent,PriceDataComponent,BtcchartComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'crypto';
}
