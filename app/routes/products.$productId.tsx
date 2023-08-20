import type { LoaderArgs } from "@remix-run/cloudflare";
import { useLoaderData } from "@remix-run/react";
import ProductList from "~/components/ProductList";
import Gallery from "~/components/gallery";
import Container from "~/components/ui/Container";
import { getProduct } from "~/loaders/getProduct";
import { getProducts } from "~/loaders/getProducts";

export const loader = async ({ params, context }: LoaderArgs) => {
  //@ts-ignore
  const url = context.env.NEXT_PUBLIC_API_URL;
  const product = await getProduct(url, params.productId!);
  const products = await getProducts({ categeryId: product.category.id }, url);
  return { product, products };
};

const Products = () => {
  const { product, products: suggestedProduct } =
    useLoaderData<typeof loader>();

  return (
    <div className="bg-white">
      <Container>
        <div className="px-4 py-10 sm:px-6 lg:px-8">
          <div className="lg:grid lg:grid-cols-2 lg:items-start lg:gap-x-8">
            <Gallery images={product.images} />
            <div className="mt-10 px-4 sm:mt-16 sm:px-0 lg:mt-0">
              {/* Info  */}
              Info
            </div>
          </div>
          <hr className="my-10" />
          <ProductList title="Related Items " items={suggestedProduct} />
        </div>
      </Container>
    </div>
  );
};

export default Products;
