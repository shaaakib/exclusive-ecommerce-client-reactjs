import React from 'react';
import Rating from 'react-rating';
import { FaRegEye, FaRegHeart, FaRegStar, FaStar } from 'react-icons/fa';
import { Link } from 'react-router-dom';

export default function ProductCard({ product }) {
  const { id, images, title, new_price, old_price, reviews, discount } =
    product;
  return (
    <div>
      <Link to={`/product/${id}`}>
        <div className="card card-compact  h-96 bg-base-100 shadow-xl">
          <figure className="bg-gray-100 py-3 px-3 relative ">
            <img className="h-48 mt-5 w-48 " src={images} alt="Shoes" />
          </figure>

          <p className="absolute left-6 bg-red-500 py-2 px-3 text-white rounded-lg  top-5">
            {discount}%
          </p>
          <FaRegHeart className="absolute  right-6 top-5 mb-5" />
          <FaRegEye className="absolute  right-6 top-14 " />

          <div></div>
          <div className="card-body">
            <h2 className="card-title">{title}</h2>
            <p className="text-xl font-sans">
              <span className="text-red-500"> ${new_price}</span>{' '}
              <span className="line-through">${old_price}</span>
            </p>
            <div className="py-2">
              <Rating
                placeholderRating={reviews}
                readonly
                emptySymbol={<FaRegStar />}
                placeholderSymbol={<FaStar className="text-yellow-400 " />}
                fullSymbol={<FaStar />}
              />
              <span className="ms-4 text-xl">({reviews})</span>
            </div>
            <div className="card-actions justify-right">
              <button className="btn btn-primary">Add to Cart</button>
            </div>
          </div>
        </div>
      </Link>
    </div>
  );
}
