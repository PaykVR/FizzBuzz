<script lang="ts">
	import FizzBuzz from './Components/FizzBuzz.svelte';

	export let name: string;

	const data = Array.from({length: 100}, (_, i) => (i + 1));
</script>

<main>
	<h1>Hello {name}!</h1>
	<p>Let's play FizzBuzz the Svelte/Jest way...</p>
	<hr/>
	<p>
		This apps purpose is only to visualize the FizzBuzz Component and having iterator functionality.
		The FizzBuzz Component is within the bundle, but also available as UMD-js file and can be used inside 
		html/react/vue/angular etc.
	</p>

	<p>
		Be sure to checkout what Svelte is. You might understand why i have choosed it. 
		It's properly the best candidate for your problem ;)
	</p>
	<hr/>

	{#each data as i}
		<FizzBuzz inputNumber={i}/>
	{/each}
</main>

<style>
	main {
		text-align: center;
		padding: 1em;
		max-width: 240px;
		margin: 0 auto;
	}

	h1 {
		color: #ff3e00;
		text-transform: uppercase;
		font-size: 4em;
		font-weight: 100;
	}
</style>