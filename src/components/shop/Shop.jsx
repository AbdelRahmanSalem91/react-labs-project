import { useEffect, useState } from "react";
import { Card } from "react-bootstrap";

const Shop = () => {
  useEffect(() => {
    getProducts();
  }, []);

  const [products, setProducts] = useState([]);

  const getProducts = () => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((json) => setProducts(json));
  };

  return (
    <div className="product d-flex justify-content-around flex-wrap">
      {products.map((product) => {
        return (
          <Card key={product.id} style={{ width: "30%" }} className="mb-5 py-5">
            <Card.Img
              variant="top"
              src={product.image}
              className="w-50 mx-auto"
            />
            <Card.Body>
              <Card.Title className="text-nowrap text-truncate">
                {product.title}
              </Card.Title>
              <Card.Text className="text-nowrap text-truncate">
                {product.description}
              </Card.Text>
              <Card.Text>
                <strong>Price:</strong> {product.price}
              </Card.Text>
              <Card.Text>
                <strong>Rate:</strong> {product.rating.rate}
              </Card.Text>
            </Card.Body>
          </Card>
        );
      })}
    </div>
  );
};
export default Shop;
