// Reacts to POST /hello-world
export async function onRequest({env}) {
  // ...
  const value = await env.KV.get('click');
  // const value = test.TEST.get("click");
  // const value2 = context.env.TEST.get("click");
  console.log({env, value});

  // console.log(context.env);
  // const {cf} = context.request;
  // return new Response(JSON.stringify(cf, null, 2), { 'Content-Type': 'application/json' });
  return new Response('hello', value)
}
