import { useParams } from "react-router-dom";

const ProductScreen = () => {
  const params = useParams();

  return (
    <div className="about_product_wrapper">
      <div className="left">
        <img
          src="https://images.unsplash.com/photo-1606813907291-d86efa9b94db?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1352&q=80"
          alt="product"
        />
        <h3>Product Name</h3>
        <p>Price: $499</p>
        <p>This is a product description text...</p>
      </div>

      <div className="right">
        <p>Status: In stock</p>
        <p>Qty:</p>
        <select>
          <option>1</option>
          <option>2</option>
          <option>3</option>
          <option>4</option>
        </select>

        <div>
          <button type="button">Add to cart</button>
        </div>
      </div>
    </div>
  );
};

export default ProductScreen;
