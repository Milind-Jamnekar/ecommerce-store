import type { ActionArgs } from "@remix-run/cloudflare";
import { useParams } from "@remix-run/react";

export const action = async ({ params }: ActionArgs) => {
  return null;
};

export default function PostRoute() {
  const params = useParams();
  return <div>{params.categoryId}</div>;
}
