type Action =  // что будет? будет Action
  | { type: 'products/add'; payload: {price: number, title: string, image: string}} // какой Action будет? plus
  | { type: 'products/delete'; payload: string } // какой Action будет? minus
  | { type: 'products/updatePriceAndTitle'; payload: {id: string, price: number, title: string}} // какой Action будет? minus

export default Action;
