"use client";

import { useWixClient } from "@/hooks/useWixClient";
import Image from "next/image";
import { useEffect } from "react";

const CartModal = () => {
  const cartItems = true;

  const wixClient = useWixClient();

  useEffect(() => {
    const getCart = async () => {
      const response = await wixClient.currentCart.getCurrentCart();

      console.log(response);
    };

    getCart();
  }, [wixClient]);



  return (
    <div className="w-max absolute p-4 rounded-md shadow-xl bg-white top-12 right-0 flex flex-col gap-6 z-20">
      {!cartItems ? (
        <div className="">Krenjang Kosong</div>
      ) : (
        <>
        <h2 className="text-xl ">Keranjang Belanja</h2>
          {/* // list */}
          <div className="flex flex-col gap-8">
            {/* Item */}
            <div className="flex gap-4">
              <Image
                src="/Avocado.png"
                alt=""
                width={72}
                height={96}
                className="object-cover rounded-md"
              />
              <div className="flex flex-col justify-between w-full">
                {/* TOP */}
                <div className=""></div>
                {/* TITLE */}
                <div className="flex items-center justify-between gap-8">
                  <h3 className="font-semibold">Nama Produk</h3>
                  <div className="p-1 bg-gray-50 rounded-sm">Rp.50.000</div>
                </div>
                {/* DESC */}
                <div className="text-sm text-gray-500">available</div>
                {/* BOTTOM */}
                <div className="flex justify-between text-sm">
                  <span className="text-gray-500">Qty. 2</span>
                  <span className="text-blue-500">Remove</span>
                </div>
              </div>
            </div>
            {/* Item */}
            <div className="flex gap-4">
              <Image
                src="/Avocado.png"
                alt=""
                width={72}
                height={96}
                className="object-cover rounded-md"
              />
              <div className="flex flex-col justify-between w-full">
                {/* TOP */}
                <div className=""></div>
                {/* TITLE */}
                <div className="flex items-center justify-between gap-8">
                  <h3 className="font-semibold">Nama Produk</h3>
                  <div className="p-1 bg-gray-50 rounded-sm">Rp.50.000</div>
                </div>
                {/* DESC */}
                <div className="text-sm text-gray-500">available</div>
                {/* BOTTOM */}
                <div className="flex justify-between text-sm">
                  <span className="text-gray-500">Qty. 2</span>
                  <span className="text-blue-500">Remove</span>
                </div>
              </div>
            </div>
          </div>
          {/* Buttom */}
          <div className="">
            <div className="flex items-center justify-between font-semibold">
              <span className="">Subtotal</span>
              <span className="">Rp.100.000</span>
            </div>
            <p className="text-gray-500 text-sm mt-2 mb-4">
              Shipping and taxes calculated at Checkout
            </p>
            <div className="flex justify-between text-sm">
                <button className="rounded-md py-3 px-4 ring-1 ring-gray-300">View Cart</button>
                <button className="rounded-md py-3 px-4 bg-black text-white">Checkout</button>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default CartModal;
