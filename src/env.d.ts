/// <reference path="../.astro/types.d.ts" />
/// <reference types="astro/client" />

type Social = {
  platform: string;
  user: string;
};

type BlogCollection = {
  id: string,
  slug: string,
  body: string,
  collection: string,
  data: {
    title: string,
    author: string,
    description: string,
    image: string,
    pubDate: string,
    tags: string[]
  },
  render: [() => void]
}
