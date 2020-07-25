export enum CoinType {
  'Event',
  'Status',
  'Symbol',
  'System'
}

export interface Coin {
  description: string
  name: string
  type: CoinType
}
