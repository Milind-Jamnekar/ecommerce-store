import type { FC } from "react";
import { Image } from "@unpic/react";
import type { Product } from "~/types/Billboard";
import IconButton from "./IconButton";
import { Expand, ShoppingCart } from "lucide-react";
import Currency from "./Currency";
import { Link } from "@remix-run/react";

interface ProductCardProps {
  product: Product;
}

const ProductCard: FC<ProductCardProps> = ({ product }) => {
  return (
    <Link
      to={`/products/${product.id}`}
      className="bg-white group cursor-pointer rounded-2xl border p-4 space-y-4"
    >
      {/* Images and optons */}
      <div className="aspect-square rounded-xl bg-gray-100 relative">
        <Image
          src={product.images[0].url}
          layout="fullWidth"
          className="aspect-square object-cover"
        />

        <div className="opacity-0 group-hover:opacity-100 transition absolute w-full px-6 bottom-5">
          <div className="flex gap-x-6 justify-center">
            <IconButton
              onClick={() => {}}
              icon={<Expand size={20} className="text-gray-600" />}
            />
            <IconButton
              onClick={() => {}}
              icon={<ShoppingCart size={20} className="text-gray-600" />}
            />
          </div>
        </div>
      </div>
      {/* Description */}
      <div>
        <p className="font-semibold text-lg">{product.name}</p>
        <p className="tex-sm text-gray-500">{product.category.name}</p>
      </div>
      {/* Price */}
      <div className="flex items-center justify-between">
        <Currency value={product.price} />
      </div>
    </Link>
  );
};

export default ProductCard;
