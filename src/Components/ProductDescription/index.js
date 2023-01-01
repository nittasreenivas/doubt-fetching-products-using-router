import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
export default function ProductDescription() {
  const [product, setProducts] = useState({});
  const { id } = useParams();
  console.log("id", id);
  const URL = "https://dummyjson.com";
  // const URL = "https://dummyjson.com/products?limit=100"
  // console.log('URL',URL)
  const fetchSingleProduct = async (api) => {
    const response = await fetch(api);
    const { products } = await response.json();
    console.log(products);
    setProducts(products);
  };
  useEffect(() => {
    const base_URL = `${URL}/products/${id}`;
    fetchSingleProduct(base_URL);
  }, [id]);
  return (
    <div>
      <h2> Product Description </h2>
      <div>
        <h3> {product?.title}</h3>
        <img alt="title" src={product?.thumbnail} width={244} />
      </div>
    </div>
  );
}
