import type { LoaderArgs, V2_MetaFunction } from "@remix-run/cloudflare";
import { useLoaderData } from "@remix-run/react";
import Billboard from "~/components/Billboard";
import type { Billboard as BillboardType, Product } from "~/types/Billboard";

import Container from "~/components/ui/Container";
import ProductList from "~/components/ProductList";
import { getProducts } from "~/loaders/getProducts";

export const meta: V2_MetaFunction = () => {
  return [
    { title: "Store" },
    { name: "description", content: "Welcome to Storefront 🏪!" },
  ];
};

export const loader = async ({
  params,
  request,
  context,
}: LoaderArgs): Promise<{ billboard: BillboardType; products: Product[] }> => {
  //@ts-ignore
  const publicUrl = context.env.NEXT_PUBLIC_API_URL;

  const products = await getProducts({ isFeatured: true }, publicUrl);
  const id = "a51ce62b-d8ee-4bfe-8e78-7317b3062987";

  const res = await fetch(`${publicUrl}/billboards/${id}`);
  const billboard = await res.json<BillboardType>();

  return { billboard, products };
};

export default function Index() {
  const { billboard, products } = useLoaderData<typeof loader>();

  return (
    <Container>
      <div className="space-y-10 pb-10">
        <Billboard data={billboard} />
      </div>
      <div className="flex flex-col gap-y-8 sm:px-4 lg:px-8">
        <ProductList title="Featured Products" items={products} />
      </div>
    </Container>
  );
}
