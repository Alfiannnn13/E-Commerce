import Link from "next/link";
import Menu from "./Menu";
import Image from "next/image";
import SearchBar from "./SearchBar";
import dynamic from "next/dynamic";

const NavIcons = dynamic(() => import("./NavIcons"), { ssr: false });

const Navbar = () => {
  return (
    <div className="h-20 px-4 md:px-8 lg:px-16 xl:32 2xl:px-64 relative">
      {/* Mobile */}
      <div className="h-full flex items-center justify-between md:hidden">
        <div className="mx-auto">
          <Link href="/">
            <Image src="/logo.png" alt="" width={32} height={32} />
          </Link>
        </div>
        <NavIcons/>
      </div>

      {/* {Layar Gede} */}
      <div className="hidden md:flex items-center h-full justify-between gap-8">
        {/* Kiri */}
        <div className="w-1/3 xl:w-1/2 flex items-center gap-12">
          <Link href="/" className="flex items-center gap-3">
            <Image src="/logo.png" alt="" width={28} height={28} />
            <div className="text-2xl tracking-wide">POLOSIN</div>
          </Link>
          <div className="hidden xl:flex gap-4">
            <Link href="/">Homepage</Link>
            <Link href="/list">Category</Link>
            <Link href="/">Shop</Link>
            <Link href="/">Sale</Link>
            <Link href="/">Homepage</Link>
          </div>
        </div>
        {/* Kanan */}
        <div className="w-2/3 xl:w-1/2 flex items-center justify-between gap-8">
          <SearchBar />
          <NavIcons />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
