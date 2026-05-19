export async function onRequest(context) {
  return new Response(JSON.stringify({ status: "ok", runtime: "cloudflare-pages" }), {
    headers: { "Content-Type": "application/json" },
  });
}
