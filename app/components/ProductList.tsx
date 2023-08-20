import type { FC } from "react";
import type { Product } from "~/types/Billboard";
import ProductCard from "./ui/ProductCard";

interface ProductListProps {
  title: string;
  items: Product[];
}

const ProductList: FC<ProductListProps> = ({ items, title }) => {
  return (
    <div className="space-y-4 px-10 sm:px-5 lg:px-0">
      <h3 className="font-bold text-3xl">{title}</h3>
      {items.length === 0 && (
        <div className="flex items-center justify-center h-full w-full text-neutral-50" />
      )}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {items.map((item) => (
          <ProductCard key={item.id} product={item} />
        ))}
      </div>
    </div>
  );
};

export default ProductList;
