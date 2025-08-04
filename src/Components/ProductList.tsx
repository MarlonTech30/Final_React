
import './ProductList.css';

type ProductListProps = {
  title: string;
  imgURL: string;
  description: string;
  price: string | number;
  rating: string | number;
  quantity:number;
  onAdd: ()=> void;
  onMinus: ()=> void;
};
function ProductList(props: ProductListProps) {
  return (
    <div className="card">
      <h4>{props.title}</h4>
      <img src={props.imgURL} alt="Product Image" />
      <p>{props.description}</p>
      <p>₱{props.price}</p>
     


      <div className="quantity-control">
        <button onClick={props.onMinus} className="qty-button">-</button>
         <p>{props.quantity}</p>
        <button onClick={props.onAdd} className="qty-button">+</button>
      </div>
    </div>
  );
}

export default ProductList;