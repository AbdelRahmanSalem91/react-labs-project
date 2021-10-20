import { useEffect, useState } from "react";
import { Card } from "react-bootstrap";
import { Link } from "react-router-dom";

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
          <>
            {product ? (
              <Card
                key={product.id}
                style={{ width: "30%" }}
                className="mb-5 py-5"
              >
                <Link to={`/shop/${product.id}`} className="text-center">
                  <Card.Img
                    variant="top"
                    src={product.image}
                    className="w-50 mx-auto"
                  />
                </Link>
                <Card.Body>
                  <Link to={`/shop/${product.id}`}>
                    <Card.Title className="text-nowrap text-truncate">
                      {product.title}
                    </Card.Title>
                  </Link>
                  <Card.Text className="text-nowrap text-truncate">
                    {product.description}
                  </Card.Text>
                  <Card.Text>
                    <strong>Price:</strong> {product.price}
                  </Card.Text>
                  <Card.Text>
                    <strong>Rating:</strong> {product.rating.rate}
                  </Card.Text>
                </Card.Body>
              </Card>
            ) : (
              <div
                class="spinner-border text-primary mt-5 pt-5"
                role="status"
              ></div>
            )}
          </>
        );
      })}
    </div>
  );
};
export default Shop;
