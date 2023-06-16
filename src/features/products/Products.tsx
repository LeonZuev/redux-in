import { SyntheticEvent, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../store";

export default function Products(): JSX.Element {
  const products = useSelector((globalState: RootState) => globalState.products);
  const [product, setProduct] = useState<string>('');
  const [title, setTitle] = useState<string>('');
  const dispatch = useDispatch();
  function addProduct(e: SyntheticEvent): void {
    e.preventDefault();
    dispatch({
      type: 'products/add', payload: {
        price: "number",
        title: "string",
        image: "string"
      }
    });
    setProduct('');
  }
  return(
    <>
    <div>Products</div>
    <form onSubmit={addProduct}>
      <input
      type="text"
      required
      value={product}
      onChange={(e) => setProduct(e.target.value)}
      />
      <button type="submit">Add Product</button>
      
    </form>
    </>
  )
}
