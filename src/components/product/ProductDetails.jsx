import { useEffect, useState } from "react";

const ProductDetails = ({ match }) => {
  useEffect(() => {
    getProductDetails();
  }, []);
  const [details, setDetails] = useState({});
  const getProductDetails = () => {
    fetch(`https://fakestoreapi.com/products/${match.params.id}`)
      .then((res) => res.json())
      .then((json) => setDetails(json));
  };
  return (
    <>
      {details ? (
        <div className="d-flex justify-content-center align-items-center">
          <div className="w-50">
            <img className="w-75" src={details.image} alt={details.title} />
          </div>
          <div className="w-50">
            <h2>{details.title}</h2>
            <p>{details.description}</p>
            <p>{details.price}</p>
          </div>
        </div>
      ) : (
        <div class="spinner-border text-primary mt-5 pt-5" role="status"></div>
      )}
    </>
  );
};

export default ProductDetails;
