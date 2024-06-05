"use client";

import { useCartStore } from "@/hooks/useCartStore";
import { useWixClient } from "@/hooks/useWixClient";
import Image from "next/image";
import { useEffect } from "react";
import { media as wixMedia } from "@wix/sdk";
import { currentCart } from "@wix/ecom";

const CartModal = () => {
  const wixClient = useWixClient();
  const { cart, getCart, removeItem } = useCartStore();

  useEffect(() => {
    getCart(wixClient);
  }, [wixClient, getCart]);

  console.log(cart)

  const handleCheckout = () => {
    const message = generateWhatsAppMessage(cart.lineItems || []);
    const phoneNumber = "+6281410601130"; // Nomor WhatsApp tujuan
    const whatsappUrl = `https://api.whatsapp.com/send?phone=${phoneNumber}&text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, "_blank");
  };

  const generateWhatsAppMessage = (lineItems: any[]) => {
    let message = "Halo, saya ingin memesan:\n";
    lineItems.forEach((item) => {
      message += `${item.productName?.original} (${item.quantity} x ${item.price?.formattedAmount})\n`;
    });

    // Pastikan subtotal tidak undefined sebelum mengakses formattedAmount
    const subtotal = cart.subtotal ? cart.subtotal.formattedAmount : "N/A";
    message += `Total: ${subtotal}\n`;
    message += "Terima kasih!";
    return message;
  };

  return (
    <div className="w-max absolute p-4 rounded-md shadow-xl bg-white top-12 right-0 flex flex-col gap-6 z-20">
      {!cart.lineItems ? (
        <div className="">Keranjang Kosong</div>
      ) : (
        <>
          <h2 className="text-xl ">Keranjang Belanja</h2>
          <div className="flex flex-col gap-8">
            {cart.lineItems.map((item) => (
              <div className="flex gap-4" key={item._id}>
                {item.image && (
                  <Image
                    src={wixMedia.getScaledToFitImageUrl(item.image, 72, 96, {})}
                    alt=""
                    width={72}
                    height={96}
                    className="object-cover rounded-md"
                  />
                )}
                <div className="flex flex-col justify-between w-full">
                  <div className=""></div>
                  <div className="flex items-center justify-between gap-8">
                    <h3 className="font-semibold">{item.productName?.original}</h3>
                    <div className="p-1 bg-gray-50 rounded-sm flex items-center gap-2">
                      {item.quantity && item.quantity > 1 && (
                        <div className="text-xs text-blue-500">{item.quantity} x </div>
                      )}
                      {item.price?.formattedAmount}
                    </div>
                  </div>
                  <div className="text-sm text-gray-500">
                    {item.availability?.status}
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-500">Qty. {item.quantity}</span>
                    <span className="text-blue-500 cursor-pointer" onClick={() => removeItem(wixClient, item._id!)}>Remove</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="">
            <div className="flex items-center justify-between font-semibold">
              <span className="">Subtotal</span>
              <span className="">{cart.subtotal?.formattedAmount || "N/A"}</span>
            </div>
            <p className="text-gray-500 text-sm mt-2 mb-4">
              Shipping and taxes calculated at Checkout
            </p>
            <div className="flex justify-between text-sm">
              <button className="rounded-md py-3 px-4 ring-1 ring-gray-300">View Cart</button>
              <button className="rounded-md py-3 px-4 bg-black text-white" onClick={handleCheckout}>
                Checkout
              </button>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default CartModal;
