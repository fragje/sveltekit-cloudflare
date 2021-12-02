<script>
	let num = 0;

	function addOne() {
		num++;
	}

	function addTwo() {
		num = num + 2;
	}
</script>
<h1>Welcome to SvelteKit</h1>
<p>{num}</p>
<button type="button" on:click={addOne}>Add 1</button>
<button type="button" on:click={addTwo}>Add 2</button>
<p>Visit <a href="https://kit.svelte.dev">kit.svelte.dev</a> to read the documentation</p>
