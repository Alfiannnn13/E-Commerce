import Image from "next/image";
import Link from "next/link";

const Footer = () => {
  return (
    <div className="py-24 px-4 md:px-8 lg:px-16 xl:32 2xl:px-64 bg-gray-100 text-sm mt-24">
      {/* Atas */}
      <div className="flex flex-col md:flex-row justify-between gap-24">
        {/* Kiri */}
        <div className="w-full md:w-1/2 lg:w-1/4 flex flex-col gap-5">
          <Link href="/">
            <div className="text-2xl tracking-wide">POLOSIN</div>
          </Link>
          <p>
            Jl. Cikarang Selatan - Cibarusah, Sindangmulya, Cibarusah, Bekasi,
            Indonesia, 17340
          </p>
          <span className="font-semibold">polosinid@gmail.com</span>
          <span className="font-semibold">+6281213528024</span>
          <div className="flex gap-3">
            <Image src="/instagram2.png" alt="" width={50} height={40} />
            <Image src="/shopee.png" alt="" width={40} height={40} />
            <Image src="/tokped2.png" alt="" width={40} height={40} />
          </div>
        </div>
        {/* tengah */}
        <div className="hidden lg:flex justify-between w-1/2">
            <div className="flex flex-col justify-between">
                <h1 className="font-medium text-lg">SHOP</h1>
                <div className="flex flex-col gap-5">
                    <Link href="">New Arrivals</Link>
                    <Link href="">Accecories</Link>
                    <Link href="">Women</Link>
                    <Link href="">Men</Link>
                    <Link href="">All Products</Link>
                </div>
            </div>
            <div className="flex flex-col justify-between">
                <h1 className="font-medium text-lg">SERVICE</h1>
                <div className="flex flex-col gap-5">
                    <Link href="">Help</Link>
                    <Link href="">Payment Method</Link>
                    <Link href="">Free Shipping</Link>
                    <Link href="">Return</Link>
                    <Link href="">Contact Us</Link>
                </div>
            </div>
            <div className="flex flex-col justify-between">
                <h1 className="font-medium text-lg">SERVICE</h1>
                <div className="flex flex-col gap-5">
                    <Link href="">Help</Link>
                    <Link href="">Payment Method</Link>
                    <Link href="">Free Shipping</Link>
                    <Link href="">Return</Link>
                    <Link href="">Contact Us</Link>
                </div>
            </div>
        </div>
        {/* kanan */}
        <div className="w-full md:w-1/2 lg:w-1/4 flex flex-col gap-5">
          <h1 className="font-medium text-lg">SUBCRIBE</h1>
          <p>
            Be the first to get latest mews about trends, promotions, and munch
            more!
          </p>
          <div className="flex">
            <input
              type="text"
              placeholder="Email Addres"
              className="p-4 w-3/4"
            />
            <button className="w-1/4 bg-polos text-white">JOIN</button>
          </div>
          <span className="font-semibold">Payments</span>
          <div className="grid grid-cols-4 gap-2">
          <Image
              src="/discover.png"
              alt="Discover"
              height={40}
              width={40}
            />
          <Image
              src="/paypal.png"
              alt="Discover"
              height={40}
              width={40}
            />
          <Image
              src="/mastercard.png"
              alt="Discover"
              height={40}
              width={40}
            />
          <Image
              src="/visa.png"
              alt="Discover"
              height={40}
              width={40}
            />
          <Image
              src="/skrill.png"
              alt="Discover"
              height={40}
              width={40}
              className="mt-4"
            />
          <Image
              src="/shopee.png"
              alt="Discover"
              height={40}
              width={40}
              className="mt-4"
            />
          <Image
              src="/tokped2.png"
              alt="Discover"
              height={40}
              width={40}
              className="mt-4"
            />
          </div>
        </div>
      </div>
      {/* Bawah */}
      <div className="h-[2px] bg-gray-200 mt-12"/>
      <div className="flex flex-col md:flex-row items-center justify-center gap-8 mt-24">
        <div className="">© 2024 POLOSIN. All rights reserved</div>
      </div>
    </div>
  );
};

export default Footer;
