<script>
	let num = 0;

	function addOne() {
		num++;
	}

	function addTwo() {
		num = num + 2;
	}

	let location = '';

	async function getLocation() {
		const response = await fetch('/location');
		const json = await response.json();

		location = json.city;
	}
</script>
<h1>Sveltkit & Cloudflare pages test with edge workers</h1>

<div class="box">
	<h2>1. Svelte simple state</h2>
	<p>{num}</p>
	<button type="button" on:click={addOne}>Add 1</button>
	<button type="button" on:click={addTwo}>Add 2</button>
</div>

<div class="box">
	<h2>2. Fetch data from cloudflare worker</h2>
	{#if location}
		<p>From what I can tell you are located in <strong>{location}</strong></p>
	{/if}
	{#if !location}
		<button on:click={getLocation}>Get my location from a serverless function</button>
	{/if}
</div>

<style>
	.box {
		padding: 2em 0;
	}

	.box + .box {
		border-top: 1px solid #cccc77;
	}

	strong {
		font-size: 2em;
		color: rebeccapurple;
	}
</style>
