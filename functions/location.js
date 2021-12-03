// Reacts to POST /hello-world
export async function onRequest(context) {
  // ...
  const {cf} = context.request;
  return new Response(JSON.stringify(cf, null, 2), { 'Content-Type': 'application/json' });
}
