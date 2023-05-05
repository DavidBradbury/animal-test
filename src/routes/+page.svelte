<script>
	/** @type {Array<{name: string}>} */
	let animals = [];
	const getAnimals = async () => {
		const res = await fetch('/api/animals');
		animals = await res.json();
	};
	const hideAnimals = () => {
		animals = [];
	};
</script>

<svelte:head>
	<title>Home</title>
	<meta name="description" content="Animal Test App" />
</svelte:head>

<section>
	<h1>Animal Test App</h1>
	<div id="actions">
		<button on:click={getAnimals}>Get Animals</button>
		<button on:click={hideAnimals}>Hide Animals</button>
	</div>
	<ul>
		{#each animals as animal}
			<li>{animal.name}</li>
		{/each}
	</ul>
</section>

<style>
	section {
		display: flex;
		flex-direction: column;
		align-items: center;
		flex: 0.6;
	}

	h1 {
		width: 100%;
	}

	#actions {
		display: flex;
		justify-content: center;
		align-items: center;
		width: 100%;
		gap: 1rem;
	}

	ul {
		margin: 1rem 0;
		padding: 1rem;
		line-height: 1.5;
		width: 100%;
		max-width: 600px;
		text-align: center;
	}

	ul li {
		display: inline-block;
		margin: 0.5rem;
		padding: 0.5rem 1rem;
		background: #1f83b1;
		color: #fff;
		border-radius: 0.5rem;
		box-shadow: inset 0 -1rem 1rem rgba(146, 254, 249, 0.2);
		text-shadow: 0 1px 0.1rem rgba(21, 12, 112, 0.2), 0 2px 0.1rem rgba(21, 12, 112, 0.2);
	}
</style>
