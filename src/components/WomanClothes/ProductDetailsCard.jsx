import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";

const ProductDetails = () => {
  const { id } = useParams(); // gets the id from URL like /product/12
  const [product, setProduct] = useState(null);

  useEffect(() => {
    axios
      .get(`https://692d8146e5f67cd80a4bc726.mockapi.io/luminae/products/${id}`)
      .then((res) => setProduct(res.data))
      .catch((err) => console.log(err));
  }, [id]);

  if (!product) return <p>Loading...</p>;

  return (
    <div className="font-Lato px-5 py-">
      <div className="max-w-[1440px] mx-auto grid grid-cols-2 gap-10">
        {/* LEFT — IMAGE */}
        <img src={product.image} alt={product.title} className="rounded-xl h-[661px]" />

        {/* RIGHT — INFO */}
        <div>
          <h1 className="text-2xl font-bold mb-2">{product.brand}</h1>
          <p className="text-[#555] mb-4">{product.title}</p>

          <p className="text-3xl font-bold text-[#FF2E00]">${product.price}</p>
          <p className="text-[#777] line-through">${product.oldPrice}</p>
          <p className="text-[#FF2E00]">{product.discount}</p>

          <div className="mt-5">
            <h3 className="font-bold text-lg mb-2">Rating</h3>
            <p>
              {product.rating} ★ ({product.reviews} reviews)
            </p>
          </div>

          <button className="mt-8 bg-[#4172DC] text-white px-6 py-3 rounded-md">
            Add to Basket
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
