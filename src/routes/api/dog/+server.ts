import type { RequestEvent, RequestHandler } from "./$types";

export const GET: RequestHandler = async (e: RequestEvent) => {
  e.cookies;
  e.params;
  e.request.body;
  e.fetch("SomeURL");

  return new Response();
};

export const POST: RequestHandler = async () => {
  return new Response();
};

export const DELETE: RequestHandler = async () => {
  return new Response();
};
