// Ambient module declarations for Vite imagetools (querystring image imports)
// Examples:
//   import img from "./hero.webp?w=672&format=webp";
//   import srcset from "./hero.webp?w=320;480;672&as=srcset";

declare module "*.webp?*as=srcset*" {
  const srcset: string;
  export default srcset;
}

declare module "*.webp?*" {
  const src: string;
  export default src;
}

declare module "@/*.webp?*as=srcset*" {
  const srcset: string;
  export default srcset;
}

declare module "@/*.webp?*" {
  const src: string;
  export default src;
}
