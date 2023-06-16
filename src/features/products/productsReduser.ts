import uniqid from 'uniqid';
import Product from './types/Product';
import Action from './types/Actoin';

const initialState: Product[] = [
  {
    id: uniqid(),
    title: 'Cheesecake',
    image: 'https://loremflickr.com/cache/resized/3061_2772510173_99439be815_c_640_480_nofilter.jpg',
    price: 2
  }
];

export default function productsReducer(
  state: Product[] = initialState, action: Action): Product[] {
  switch (action.type) {
    case 'products/add':
      return [...state, {
        id: uniqid(),
        title: action.payload.title,
        price: action.payload.price,
        image: action.payload.image
      }];
    case 'products/delete':
      return state.filter((product) => product.id !== action.payload);
    case 'products/updatePriceAndTitle':
      return state.map((product) => {
        if (product.id === action.payload.id) {
          return {
            ...product,
            title: action.payload.title,
            price: action.payload.price
          };
        }
        return product;
      });
    default: return state;
  }
}