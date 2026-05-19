export async function onRequestPost(context) {
  try {
    const data = await context.request.json();
    // In Cloudflare, you can use context.env.YOUR_DB or context.env.YOUR_SECRET
    return new Response(JSON.stringify({ message: "Received by Cloudflare", data }), {
      headers: { "Content-Type": "application/json" },
    });
  } catch (err) {
    return new Response(JSON.stringify({ error: "Invalid JSON" }), {
      status: 400,
      headers: { "Content-Type": "application/json" },
    });
  }
}
