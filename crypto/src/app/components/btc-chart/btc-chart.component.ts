import { Component } from '@angular/core';
// Import the echarts core module, which provides the necessary interfaces for using echarts.
import * as echarts from 'echarts/core';import { NGX_ECHARTS_CONFIG, NgxEchartsModule } from 'ngx-echarts';
import { EChartsOption } from 'echarts';
import { CrypoPriceService } from '../../services/crypo-price.service';
// Import bar charts, all suffixed with Chart


@Component({
  selector: 'app-btc-chart',
  standalone: true,
  imports: [NgxEchartsModule],
  templateUrl: './btc-chart.component.html',
  styleUrl: './btc-chart.component.css',
  providers: [
		{
			provide: NGX_ECHARTS_CONFIG,
			useValue: {
				echarts: () => import('echarts')
			}
		}
	]
})

export class BtcchartComponent {

  buffer : any[] = [];
  option: EChartsOption = {};

  constructor(public bitcoin: CrypoPriceService) { }

  ngOnInit(): void {

  this.buffer = this.bitcoin.bitcoinData;

    this.option = {
        title: {
            text: 'Bitcoin Price Over Time',
            subtext: 'Simulated Data'
        },
        tooltip: {
            trigger: 'axis',
            axisPointer: {
                type: 'cross'
            }
        },
        toolbox: {
            show: true,
            feature: {
                saveAsImage: {}
            }
        },
        xAxis: {
            type: 'category',
            boundaryGap: false,
            data: this.buffer.map(item => item[0])
        },
        yAxis: {
            type: 'value',
            axisLabel: {
                formatter: '{value} $'
            },
            axisPointer: {
                snap: true
            }
        },
        visualMap: {
            show: false,
            dimension: 0,
            pieces: [
                { lte: 6, color: 'green' },
                { gt: 6, lte: 8, color: 'red' },
                { gt: 8, lte: 14, color: 'green' },
                { gt: 14, lte: 17, color: 'red' },
                { gt: 17, color: 'green' }
            ]
        },
        series: [
            {
                name: 'Bitcoin Price',
                type: 'line',
                smooth: true,
                data: this.buffer.map(item => item[4]),
                markArea: {
                    itemStyle: {
                        color: 'rgba(255, 173, 177, 0.4)'
                    }
                }
            }
        ]
    };

}
}

