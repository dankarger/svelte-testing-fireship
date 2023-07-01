import type { PageLoad } from "./$types";

export const load = (async ({ setHeaders }) => {
  // const res = await fetch("someApi").then((res) => res.json());
  // const data = await res.json();
  const data = {
    text: "ggggggg",
  };
  // setHeaders({
  //   "cache-control": "max-age=60",
  // });
  // setHeaders({
  //   age: res.headers.get("age"),
  //   "cache-control": res.headers.get("cache-control"),
  // });

  return data;
}) satisfies PageLoad;
