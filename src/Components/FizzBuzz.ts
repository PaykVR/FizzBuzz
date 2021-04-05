import FizzBuzz from './FizzBuzz.svelte';

const fizzBuzz = new FizzBuzz({
	target: document.body,
	props: {
		name: 'Chris'
	}
});

export default fizzBuzz;