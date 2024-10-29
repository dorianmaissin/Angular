import { Component } from '@angular/core';
import { WalletService } from '../../services/wallet.service';
import { CrypoPriceService } from '../../services/crypo-price.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-wallet',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './wallet.component.html',
  styleUrl: './wallet.component.css'
})
export class WalletComponent {
  constructor(
    public wallet : WalletService
  ) {}
}
