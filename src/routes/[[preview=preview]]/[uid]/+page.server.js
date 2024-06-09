import { asText } from '@prismicio/client';
import { createClient } from '$lib/prismicio';

export const prerender = false; // Disable prerendering for this page

export async function load({ params, url, fetch, cookies }) {
  const client = createClient({ fetch, cookies });

  let searchQuery = "";
  if (typeof url !== "undefined") {
    searchQuery = url.searchParams.get("search") || "";
  }

  const page = await client.getByUID('page', params.uid);

  // Filter the list items based on the search query
  let filteredItems = page.data.slices.map(slice => {
    if (slice.slice_type === "list_table" && searchQuery) {
      return {
        ...slice,
        primary: {
          ...slice.primary,
          list_item: slice.primary.list_item.filter(item => {
            const title = item.title[0]?.text || "";
            return title.toLowerCase().includes(searchQuery.toLowerCase());
          })
        }
      };
    }
    return slice;
  });

  return {
    page: {
      ...page,
      data: {
        ...page.data,
        slices: filteredItems
      }
    },
    title: asText(page.data.title),
    meta_description: page.data.meta_description,
    meta_title: page.data.meta_title,
    meta_image: page.data.meta_image.url,
    searchQuery
  };
}

export async function entries() {
  const client = createClient();

  const pages = await client.getAllByType('page');

  return pages.map((page) => {
    return { uid: page.uid };
  });
}
