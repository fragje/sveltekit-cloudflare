addEventListener('fetch', event => {
  event.respondWith(handleRequest(event.request));
  // console.dir(event);
})
/**
 * Respond with hello worker text
 * @param {Request} request
 */
async function handleRequest(request) {
  console.log(request);
  const apiPoke = await fetch('https://pokeapi.co/api/v2/pokemon/1/');
  const apiPokeJson = await apiPoke.json();

  return new Response(JSON.stringify(apiPokeJson, '', 2), {
    headers: { 'content-type': 'application/json' },
  })
}
