import { logDevReady } from "@remix-run/cloudflare";
import { createPagesFunctionHandler } from "@remix-run/cloudflare-pages";
import * as build from "@remix-run/dev/server-build";

if (process.env.NODE_ENV === "development") {
  logDevReady(build);
}

export const onRequest = createPagesFunctionHandler({
  build,
  getLoadContext(context) {
    // Hand-off Cloudflare ENV vars to the Remix `context` object
    return { env: context.env };
  },
  mode: process.env.NODE_ENV,
});
