import type { Product } from "~/types/Billboard";

export const getProduct = async (url: string, id: string): Promise<Product> => {
  const response = await fetch(`${url}/products/${id}`);
  return response.json();
};
