import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import CartItem from '../CartItem/CartItem';

export default function Cart() {
  const { cartArray } = useLoaderData();

  let total = 0;
  if (cartArray.length > 0) {
    for (const product of cartArray) {
      total = total + product.new_price * product.quantity;
    }
  }
  return (
    <div>
      <div>
        <div className="flex justify-between border-b pb-8">
          <h1 className="font-semibold text-2xl">Shopping Cart</h1>
          <h1 className="font-semibold text-2xl">Item: {cartArray.length}</h1>
        </div>
        {cartArray.map((product) => (
          <CartItem key={product.id} product={product} />
        ))}
      </div>
      <div>
        <div id="summary" className="w-full px-8 py-10">
          <h1 className="font-semibold text-2xl border-b pb-8">
            Order Summary
          </h1>
          <div className="flex justify-between mt-10 mb-5">
            <span className="font-semibold text-sm uppercase">
              Item: {cartArray.length}
            </span>
            <span className="font-semibold text-sm">Subtotal : {total}</span>
          </div>
          <div>
            <label className="font-medium inline-block mb-3 text-sm uppercase">
              Shipping
            </label>
            <select className="block p-2 text-gray-600 w-full text-sm">
              <option>Standard shipping -Free</option>
            </select>
          </div>
          <div className="py-10">
            <label
              for="promo"
              className="font-semibold inline-block mb-3 text-sm uppercase"
            >
              Promo Code
            </label>
            <input
              type="text"
              id="promo"
              placeholder="Enter your code"
              className="p-2 text-sm w-full"
            />
          </div>
          <button className="bg-red-500 hover:bg-red-600 px-5 py-2 text-sm text-white uppercase">
            Apply
          </button>
          <div className="border-t mt-8">
            <div className="flex font-semibold justify-between py-6 text-sm uppercase">
              <span>Total cost</span>
              <span>{total}</span>
            </div>
            <button className="bg-indigo-500 font-semibold hover:bg-indigo-600 py-3 text-sm text-white uppercase w-full">
              <Link to="/checkout">Checkout</Link>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
