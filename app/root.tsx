import type { LinksFunction, LoaderArgs } from "@remix-run/cloudflare";
import fontstyle from "@fontsource-variable/urbanist/index.css";

import {
  Links,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
  useLoaderData,
} from "@remix-run/react";
import stylesheet from "~/tailwind.css";
import type { Category } from "./types/Billboard";
import Navbar from "~/components/Navbar";
import { getCategories } from "./loaders/getCategories";

export const links: LinksFunction = () => [
  { rel: "stylesheet", href: stylesheet },
  { rel: "stylesheet", href: fontstyle },
];

export const loader = async ({ context }: LoaderArgs): Promise<Category[]> => {
  //@ts-ignore
  return getCategories(context.env.NEXT_PUBLIC_API_URL);
};

export default function App() {
  const categories = useLoaderData<typeof loader>();

  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width,initial-scale=1" />
        <Meta />
        <Links />
      </head>
      <body style={{ fontFamily: "'Urbanist Variable', sans-serif"! }}>
        <Navbar categories={categories} />

        <Outlet />
        <ScrollRestoration />
        <Scripts />
        <LiveReload />
      </body>
    </html>
  );
}
