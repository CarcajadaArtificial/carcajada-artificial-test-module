import { Plugin } from "$fresh/server.ts";

export default function examplePlugin(): Plugin {
  return {
    name: "example-plugin",
    render: (ctx) => {
      ctx.render();
      return {
        styles: [
          {
            id: "example-stylesheet",
            cssText: "",
          },
        ],
      };
    },
  };
}
