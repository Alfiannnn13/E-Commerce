import { wixClientServer } from "@/lib/useWixClient";
import Image from "next/image";
import Link from "next/link";

const CategoryList = async () => {
  const wixClient = await wixClientServer();

  const cats = await wixClient.collections.queryCollections().find();

  return (
    <div className="px-4 overflow-x-scroll scrollbar-hide">
      <div className="flex gap-4 md:gap-8">
        {cats.items.map((item) => (
          <Link
            href={`/list?cat=${item.slug}`}
            className="flex-shrink-0 w-full sm:w-1/4 lg:w-1/4 xl:w-1/6"
            key={item._id}
          >
            <div className="relative bg-slate-100 w-full h-96 ">
              <Image
                src={item.media?.mainMedia?.image?.url || "/product.png"}
                alt=""
                fill
                sizes="(max-width: 600px) 50vw, (max-width: 1200px) 50vw, 50vw"
                className="object-cover"
              />
            </div>
            <h1 className="mt-8 font-light text-cl tracking-wide">
              {item.name}
            </h1>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default CategoryList;
