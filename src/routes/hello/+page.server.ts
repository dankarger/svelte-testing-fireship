import type { PageServerLoad } from "./$types";

export const load = (async () => {
  return {
    title: "my data ",
    text: "Hi mom!",
  };
}) satisfies PageServerLoad;
