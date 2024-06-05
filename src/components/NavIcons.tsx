"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import CartModal from "./CartModal";
import { useWixClient } from "@/hooks/useWixClient";
import Cookies from "js-cookie";
import { useCartStore } from "@/hooks/useCartStore";

const NavIcons = () => {
  const [isProfileOpen, setIsProfileOpen] = useState(false);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const router = useRouter();
  const pathName = usePathname();

  const wixClient = useWixClient();
  const isLoggedIn = wixClient.auth.loggedIn();

  // const isLoggedIn = false;

  // const handleProfile = () => {
  //   if (!isLoggedIn) {
  //     router.push("/login");
  //   }
  //   setIsProfileOpen((prev) => !prev);
  // };

  // AUTH WITH WIX-MANAGED AUTH
  // const wixClient = useWixClient();
  // const login = async () => {
  //   const loginRequestData = wixClient.auth.generateOAuthData(
  //     // "https://www.mysites.com/callback",
  //     // "https://www.mysites.com/login"
  //     "http://localhost:3000"
  //   );
  //   localStorage.setItem("oAuthRedirectData", JSON.stringify(loginRequestData));
  //   const { authUrl } = await wixClient.auth.getAuthUrl(loginRequestData);
  //   window.location.href = authUrl;

  // };



  // const handleLogout = async () => {
  //   setIsLoading(true);
  //   Cookies.remove("refreshToken");
  //   const { logoutUrl } = await wixClient.auth.logout(window.location.href);
  //   setIsLoading(false);
  //   setIsProfileOpen(false);
  //   router.push(logoutUrl);
  // };

  const {cart, counter, getCart } = useCartStore();

  useEffect(() => {
    getCart(wixClient);
  }, [wixClient,getCart]);

  return (
    <div className="flex items-center gap-4 xl:gap-6 relative">
      <div className="relative cursor-pointer">
        <Image
          src="/cart.png"
          alt=""
          width={22}
          height={22}
          className="cursor-pointer"
          onClick={() => setIsCartOpen((prev) => !prev)}
        />
        <div className="absolute -top-4 -right-4 w-6 h-6 bg-polos rounded-full text-white text-sm flex items-center justify-center">
          {counter}
        </div>
      </div>
      {isCartOpen && <CartModal />}
    </div>
  );
};

export default NavIcons;
