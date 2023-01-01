import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
export default function Products() {
  const [prod, setProds] = useState([]);
  // const BASE_URL = "https://dummyjson.com"
  // console.log(BASE_URL)
  //console.log(BASE_URL);
  const fetchProducts = async () => {
    const response = await fetch("https://dummyjson.com/products?limit=100");
    const { products } = await response.json();
    console.log(products);
    console.log(products);
    setProds(products);
  };
  useEffect(() => {
    fetchProducts();
  }, []);
  return (
    <div>
      <h3> Products </h3>
      <div className="phone-container">
        {prod.map((item) => {
          const { id, thumbnail } = item;
          return (
            <div key={id} className="phones">
              <Link to={`/products/${id}?limit`}>
                <img alt="title" src={thumbnail} width={222} />
              </Link>
            </div>
          );
        })}
      </div>
    </div>
  );
}
