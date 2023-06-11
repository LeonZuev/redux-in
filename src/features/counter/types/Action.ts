type Action =  // что будет? будет Action
  | { type: 'counter/plus'; payload: number } // какой Action будет? plus
  | { type: 'counter/minus'; payload: number } // какой Action будет? minus

export default Action;
