import React from 'react';
import first from '../../../assets/bg-1.png';
import { FaArrowAltCircleLeft, FaArrowAltCircleRight } from 'react-icons/fa';

export default function Banner() {
  return (
    <div className="carousel w-full ">
      <div id="slide1" className="carousel-item relative w-full ">
        <img
          src="https://images.pexels.com/photos/7742544/pexels-photo-7742544.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          className="w-full h-[75%]"
        />
        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
          <a href="#slide4" className="btn btn-circle">
            <FaArrowAltCircleLeft />
          </a>
          <a href="#slide2" className="btn btn-circle">
            <FaArrowAltCircleRight />
          </a>
        </div>
      </div>
      <div id="slide2" className="carousel-item relative w-full">
        <img src={first} className="w-full h-[75%]" />
        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
          <a href="#slide1" className="btn btn-circle">
            <FaArrowAltCircleLeft />
          </a>
          <a href="#slide3" className="btn btn-circle">
            <FaArrowAltCircleRight />
          </a>
        </div>
      </div>
      <div id="slide3" className="carousel-item relative w-full">
        <img
          src="https://images.pexels.com/photos/205421/pexels-photo-205421.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          className="w-full h-[75%]"
        />
        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
          <a href="#slide2" className="btn btn-circle">
            <FaArrowAltCircleLeft />
          </a>
          <a href="#slide4" className="btn btn-circle">
            <FaArrowAltCircleRight />
          </a>
        </div>
      </div>
      <div id="slide4" className="carousel-item relative w-full">
        <img
          src="https://images.pexels.com/photos/399159/pexels-photo-399159.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          className="w-full h-[75%]"
        />
        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
          <a href="#slide3" className="btn btn-circle">
            <FaArrowAltCircleLeft />
          </a>
          <a href="#slide1" className="btn btn-circle">
            <FaArrowAltCircleRight />
          </a>
        </div>
      </div>
    </div>
  );
}
