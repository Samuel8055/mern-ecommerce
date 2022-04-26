import { useEffect, useState } from "react";
import axios from "axios";
import { Product } from '../../components';
import './homeScreen.css';

const HomeScreen = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    getData()
  }, [])

  const getData = async () => {
    const response = await axios.get("http://localhost:5000/api/products");
    setData(response.data);
  }

  return (
    <div className='homescreen'>
      <h2 className='homescreen__title'>Latest products</h2>

      <div className='homescreen__products'>
        <div className="products_container">
          {
            data && data.map(item => (
              <Product key={item._id} item={item} />
            ))
          }
        </div>
      </div>
    </div>
  )
};

export default HomeScreen;
