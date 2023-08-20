import qs from "query-string";

import type { Product } from "~/types/Billboard";

interface Query {
  categeryId?: string;
  colorId?: string;
  sizeId?: string;
  isFeatured?: boolean;
}

export const getProducts = async (
  query: Query,
  url: string
): Promise<Product[]> => {
  const URL = `${url}/products`;

  const urlstring = qs.stringifyUrl({
    url: URL,
    query: {
      colorId: query.colorId,
      sizeId: query.sizeId,
      categoryId: query.categeryId,
      isFeatured: query.isFeatured,
    },
  });

  const response = await fetch(urlstring);
  return response.json();
};
