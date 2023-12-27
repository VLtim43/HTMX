//this globally registers the imports
import "@kitajs/html/register";

import { Elysia } from "elysia";
import { html as elysiaHtml } from "@elysiajs/html";
import { Html } from "@kitajs/html";

const app = new Elysia()
  .use(elysiaHtml())
  .get("/", ({ html }) =>
    html(
      <Layout>
        <p>im a children</p>
      </Layout>
    )
  )
  .listen(3000);

export function Layout(props: Html.PropsWithChildren<{ title?: string }>) {
  return (
    <>
      {"<!doctype html>"}
      <html lang="en">
        <head>
          <meta charset="UTF-8" />
          <meta
            name="viewport"
            content="width=device-width, initial-scale=1.0"
          />
          <title>{props.title || "Hello World!"}</title>
        </head>
        <body>{props.children}</body>
      </html>
    </>
  );
}

console.log(`running at http://localhost:3000`);
