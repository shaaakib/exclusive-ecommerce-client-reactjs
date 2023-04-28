import React from 'react';
import { useLoaderData, useParams } from 'react-router-dom';
import Banner from '../Banner/Banner';
import ProductCard from '../ProductCard/ProductCard';

export default function Category() {
  const { id } = useParams();
  const categoryProduct = useLoaderData();
  console.log(categoryProduct);
  return (
    <div className="">
      <div className='className="text-center text-3xl font-bold  mb-5'>
        <h2>Category : {categoryProduct.length}</h2>
      </div>
      <Banner />
      <div>
        <p className="bg-red-500 py-2 px-3 mx-3 text-white text-xl font-serif rounded-lg ">
          Our Products
        </p>
        <p className="text-3xl px-3 font-semibold mb-5 mt-3">
          Explore Our Products
        </p>
      </div>
      <div className=" grid md:grid-cols-2 lg:grid-cols-3 gap-5 px-4">
        {categoryProduct.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
}
