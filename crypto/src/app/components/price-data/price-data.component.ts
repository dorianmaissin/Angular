import { Component } from '@angular/core';
import { WalletService } from '../../services/wallet.service';
import { CrypoPriceService } from '../../services/crypo-price.service';

@Component({
  selector: 'app-price-data',
  standalone: true,
  imports: [],
  templateUrl: './price-data.component.html',
  styleUrl: './price-data.component.css'
})
export class PriceDataComponent {
  constructor(
    public wallet : WalletService,
    public priceData : CrypoPriceService
  ) {}
}
