<script>
	let num = 0;

	function addOne() {
		num++;
	}
</script>
<h1>Welcome to SvelteKit</h1>
<p>{num}</p>
<p>Visit <a href="https://kit.svelte.dev">kit.svelte.dev</a> to read the documentation</p>
<button type="button" on:click={addOne}>Add 1</button>
