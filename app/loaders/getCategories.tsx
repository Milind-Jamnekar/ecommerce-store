import type { Category } from "~/types/Billboard";

export const getCategories = async (url: string): Promise<Category[]> => {
  const response = await fetch(`${url}/categories`);
  return response.json();
};
