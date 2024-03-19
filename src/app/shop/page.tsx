"use client";
import Image from "next/image";
import React, { useState } from "react";
import { yellowcheir } from "@/assets";
// import Cart2 from "@/components/cards";

const Cart = () => {
  const [quantity, setQuantity] = useState(1);
  const pricePerProduct = 85;
  const [totalPrice, setTotalPrice] = useState(pricePerProduct);

  const incerement = () => {
    setQuantity(quantity + 1);
    setTotalPrice(totalPrice + pricePerProduct);
  };

  const descerement = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
      setTotalPrice(totalPrice - pricePerProduct);
    }
  };

  return (
    <>
      <div className="container bg-white mx-auto lg:px-[62px] px-[20px]">
        <p className="sm:text-[36px] text-[24px] text-[#6b3030] md:pt-[64px] text-center md:text-start pb-[40px] sm:pb-[50px]">
          Your shopping cart
        </p>
        <div className="justify-between  hidden sm:flex pb-[12px] ">
          <p className="text-[14px] text-[#6b3030] ">Product</p>
          <p className="text-[14px] text-[#6b3030]  pl-48">Quantity</p>
          <p className="text-[14px] text-[#6b3030] ">Total</p>
        </div>
        <hr className=" pt-[12px]  hidden sm:flex" />
        <div className="flex sm:justify-between py-[20px] items-center justify-center">
          <div className="flex">
            <Image
              src={yellowcheir}
              alt=""
              className="sm:w-[109px] sm:h-[134px] w-[133px] h-[170px]"
            />
            <div className="flex flex-col">
              <p className="text-[20px] text-[#6b3030]  pl-[21px]">
                Graystone vase
              </p>
              <p className="text-[14px] py-2 text-[#6b3030]  pl-[21px] max-w-[179px]">
                A timeless ceramic vase with a tri color grey glaze.
              </p>
              <p className=" text-[#6b3030]  pl-[21px]">£85</p>
              <div className="items-center gap-5 pl-[21px] flex sm:hidden">
                <button
                  onClick={descerement}
                  className="w-[30px] h-[30px] bg-[#6b3030] hover:bg-[#fff] text-[#fff] hover:text-[#6b3030] border-2 rounded"
                >
                  -
                </button>
                <p>{quantity}</p>
                <button
                  onClick={incerement}
                  className="w-[30px] h-[30px] bg-[#6b3030] hover:bg-[#fff] text-[#fff] hover:text-[#6b3030] border-2 rounded"
                >
                  +
                </button>
              </div>
            </div>
          </div>
          <div className="items-center gap-5 pl-[21px] hidden sm:flex">
            <button
              onClick={descerement}
              className="w-[30px] h-[30px] hover:bg-[#6b3030] hover:text-[#fff] border-2 rounded"
            >
              -
            </button>
            <p>{quantity}</p>
            <button
              onClick={incerement}
              className="w-[30px] h-[30px] border-2 rounded hover:bg-[#6b3030] hover:text-[#fff]"
            >
              +
            </button>
          </div>
          <p className="text-[18px] hidden sm:block">
            £ {pricePerProduct * quantity}
          </p>
        </div>
        <div className="">
          <p className="sm:text-end text-center pt-4">
            Subtotal £ {totalPrice}
          </p>
          <p className="sm:text-end text-center">
            Taxes and shipping are calculated at checkout
          </p>
          <div className="flex justify-center sm:justify-end">
            <button
              type="submit"
              className=" mb-[48px] mt-4 w-[172px]  flex  items-center justify-center hover:bg-[#6b3030]  hover:text-[#fff] rounded-2 border-2   h-[56px] bg-[#fff] text-[#6b3030] font-medium"
            >
              Go to checkout
            </button>
          </div>
        </div>
      </div>
      {/* <Cart2 /> */}
    </>
  );
};

export default Cart;
