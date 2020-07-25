import { Component, Input, OnChanges, Output } from '@angular/core';
import { Coin, CoinType } from './coin.interface'

@Component({
  selector: 'app-coin',
  templateUrl: './coin.component.html',
  styleUrls: ['./coin.component.sass']
})
export class CoinComponent implements OnChanges {
  @Input('description') description: string;
  @Input('name') name: string;
  @Input('type') type: CoinType;
  @Output('coin') coin: Coin;


  constructor() {
    this.updateCoin();
  }

  ngOnChanges(): void {
    this.updateCoin();
  }

  updateCoin (): Coin {
    this.coin = {
      description: this.description,
      name: this.name,
      type: this.type
    };
    return this.coin;
  }

}
