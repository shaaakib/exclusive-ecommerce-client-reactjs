import React, { useState } from 'react';
import { FaRegHeart, FaRegStar, FaStar, FaTruck, FaUndo } from 'react-icons/fa';
import Rating from 'react-rating';
import { useLoaderData } from 'react-router-dom';

const Product3 = () => {
  const [show, setShow] = useState(false);
  const [show2, setShow2] = useState(false);

  const product = useLoaderData();
  console.log(product);
  const { id, images, description, title, new_price, reviews } = product;

  return (
    <div className="md:flex items-start justify-center py-12 2xl:px-20 md:px-6 px-4">
      <div className="xl:w-2/6 lg:w-2/5 w-80 md:block hidden">
        <img className="w-72" alt="img of a girl posing" src={images} />
        <img className="mt-6 w-72" alt="img of a girl posing" src={images} />
      </div>
      <div className="md:hidden">
        <img className="w-80" alt="img of a girl posing" src={images} />
        <div className="flex items-center justify-between mt-3 space-x-4 md:space-x-0">
          <img
            alt="img-tag-one"
            className="md:w-48 md:h-48 w-24"
            src={images}
          />
          <img
            alt="img-tag-one"
            className="md:w-48 md:h-48 w-24"
            src={images}
          />
          <img
            alt="img-tag-one"
            className="md:w-48 md:h-48 w-24"
            src={images}
          />
          <img
            alt="img-tag-one"
            className="md:w-48 md:h-48 w-24"
            src={images}
          />
        </div>
      </div>
      <div className="xl:w-2/5 md:w-1/2 lg:ml-8 md:ml-6 md:mt-0 mt-6">
        <div className="">
          <h1
            className="
							lg:text-2xl
							text-xl
							font-semibold
							lg:leading-6
							leading-7
							text-gray-800
							mt-2
						"
          >
            {title}
          </h1>
        </div>
        <div className="py-2">
          <Rating
            placeholderRating={reviews}
            readonly
            emptySymbol={<FaRegStar />}
            placeholderSymbol={<FaStar className="text-yellow-400 " />}
            fullSymbol={<FaStar />}
          />
          <span className="ms-4 text-xl">({reviews} Reviews)</span>{' '}
          <span className="ms-3 text-green-400">In Stock</span>
        </div>
        <div>
          <p className="text-2xl font-serif">${new_price}.00</p>
        </div>
        <div className="border-b border-gray-200 py-3">
          <p className="mt-5 text-xl">{description}</p>
        </div>

        <div className="mt-4">
          <p>
            <span className="text-xl font-mono">Colors:</span>
            <span className="py-1 px-3 ms-3 border-2 border-black rounded-full bg-slate-500"></span>
            <span className="py-1 px-3 ms-3 border-2 border-black rounded-full bg-red-700"></span>
          </p>
        </div>

        <div className="mt-8">
          <p>
            <span className="text-xl font-mono">Size:</span>
            <span className="py-1 px-2 ms-3 text-xl font-semibold border-2 border-gray-400 ">
              XS
            </span>
            <span className="py-1 px-2 ms-3 text-xl font-semibold border-2 border-gray-400 ">
              S
            </span>
            <span className="py-1 px-2 ms-3 text-xl font-semibold border-2 border-gray-400 ">
              M
            </span>
            <span className="py-1 px-2 ms-3 text-xl font-semibold border-2 border-gray-400 ">
              L
            </span>
            <span className="py-1 px-2 ms-3 text-xl font-semibold border-2 border-gray-400 ">
              XL
            </span>
          </p>
        </div>
        <div className="mt-8 ">
          <p className="flex">
            <span className="py-1 px-4 text-xl font-semibold border-2 border-gray-400 ">
              -
            </span>
            <span className="py-1 px-6 text-xl font-semibold border-2 border-gray-400 ">
              2
            </span>
            <span className="py-1 px-4 text-xl font-semibold border-2 border-gray-400 ">
              +
            </span>
            <span className="py-1 px-5 rounded-lg text-xl ms-5 bg-red-500 text-white">
              Buy Now
            </span>
            <span className="py-1 px-4 rounded-lg text-xl ms-4 font-semibold border-2 border-gray-400">
              <FaRegHeart className="mt-1" />
            </span>
          </p>
        </div>

        <div>
          <div className="border-t border-b py-4 mt-7 border-gray-200">
            <div
              onClick={() => setShow(!show)}
              className="flex justify-between items-center cursor-pointer"
            >
              <p className="text-base flex gap-3 leading-4 text-gray-800">
                <FaTruck className="text-3xl" />
                <span className="text-2xl font-semibold"> Free Delivery</span>
              </p>
              <button
                className="
									cursor-pointer
									focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-400
									rounded
								"
                aria-label="show or hide"
              >
                <svg
                  className={'transform ' + (show ? 'rotate-180' : 'rotate-0')}
                  width="10"
                  height="6"
                  viewBox="0 0 10 6"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M9 1L5 5L1 1"
                    stroke="#4B5563"
                    strokeWidth="1.25"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </button>
            </div>
            <div
              className={
                'pt-4 text-base leading-normal pr-12 mt-4 text-gray-600 ' +
                (show ? 'block' : 'hidden')
              }
              id="sect"
            >
              <span className="underline font-serif">
                Enter your postal code for Delivery Availability
              </span>
            </div>
          </div>
        </div>
        <div>
          <div className="border-b py-4 border-gray-200">
            <div
              onClick={() => setShow2(!show2)}
              className="flex justify-between items-center cursor-pointer"
            >
              <p className="text-base flex  gap-3 leading-4 text-gray-800">
                <FaUndo className="text-3xl" />{' '}
                <span className="text-2xl font-semibold">Return Delivery</span>
              </p>
              <button
                className="
									cursor-pointer
									focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-400
									rounded
								"
                aria-label="show or hide"
              >
                <svg
                  className={'transform ' + (show2 ? 'rotate-180' : 'rotate-0')}
                  width="10"
                  height="6"
                  viewBox="0 0 10 6"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M9 1L5 5L1 1"
                    stroke="#4B5563"
                    strokeWidth="1.25"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </button>
            </div>
            <div
              className={
                'pt-4 text-base leading-normal pr-12 mt-4 text-gray-600  ' +
                (show2 ? 'block' : 'hidden')
              }
              id="sect"
            >
              <span className="font-serif">Free 30 Days Delivery Returns.</span>{' '}
              <span className="underline font-serif">Details</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Product3;
