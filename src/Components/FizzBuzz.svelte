<script lang="ts">
	export let inputNumber: number;

  const FizzBuzzFunction = (a: number, fallback?: string) : string => {
		if (a > 0) {
			if (a % 3 === 0 && a % 5 === 0) {
				return 'FizzBuzz';
			} else if (a % 3 === 0) {
				return 'Fizz';
			} else if (a % 5 === 0) {
				return 'Buzz';
			}
		}

		return fallback;
  };
</script>

<div class={FizzBuzzFunction(inputNumber)}>
	{FizzBuzzFunction(inputNumber, inputNumber.toString())}
</div>

<style>
	div.Fizz {
		background-color: yellow;
	}

	div.Buzz {
		background-color: blue;
	}

	div.FizzBuzz {
		background-color: green;
	}
</style>