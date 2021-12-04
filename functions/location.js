// Reacts to POST /hello-world
export async function onRequest(context) {
  // ...
  const value = await context.env.TEST.get("click");
  console.log(value);

  console.log(context.env);
  const {cf} = context.request;
  return new Response(JSON.stringify(cf, null, 2), { 'Content-Type': 'application/json' });
}
