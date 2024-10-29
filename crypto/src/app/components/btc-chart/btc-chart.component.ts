import { Component } from '@angular/core';

@Component({
  selector: 'app-btc-chart',
  standalone: true,
  imports: [],
  templateUrl: './btc-chart.component.html',
  styleUrl: './btc-chart.component.css'
})
export class BtcChartComponent {
  chartsOptions = {
    title: {
      text: 'BTC Price',
    },
    xAxis: {
      type: 'category',

    }
  }
}
