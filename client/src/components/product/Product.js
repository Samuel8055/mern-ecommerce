import { Link } from 'react-router-dom';
import './product.css';

const Product = ({ item }) => {

  return (
    <div className='product_wrapper'>
      <img src={item.imageUrl} alt="product" />
      <h3 className='product_name'>{item.name}</h3>
      <p className="product.description">{item.description}</p>
      <h2 className='product_price'>${item.price}</h2>
      <Link to={`/product/${item._id}`} className="view_product_btn">
        View
      </Link>
    </div>
  )
}

export default Product;
