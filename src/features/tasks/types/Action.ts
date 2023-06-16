type Action =  // что будет? будет Action
  | { type: 'tasks/add'; payload: string } // какой Action будет? plus
  | { type: 'tasks/delete'; payload: string } // какой Action будет? minus
  | { type: 'tasks/edit'; payload: { id: string, title: string } } // какой Action будет? minus
  | { type: 'tasks/done'; payload: string } // какой Action будет? minus

export default Action;
