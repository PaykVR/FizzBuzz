import { render } from "@testing-library/svelte";
import FizzBuzz from "./FizzBuzz.svelte";

const testData = {
  "Fizz": [3, 6, 9, 12, 18, 21],
  "Buzz": [5, 10, 20, 25],
  "FizzBuzz": [15, 30, 45, 60, 75, 90],
  none: [-1, 0, 1, 2, 4, 7],
}

test("FizzBuzz Component should render it's the input if it doesn fit within FizzBuzz rules", () => {
  const results = render(FizzBuzz, { props: { inputNumber: 0 } });
  expect(() => results.getByText("0")).not.toThrow();
});

test("FizzBuzz Component should interpretate sample data right", () => {
  Object.keys(testData).forEach(key => {
    const data = testData[key];

    data.forEach(entry => {
      const results = render(FizzBuzz, { props: { inputNumber: entry } });

      if (key !== "none") {
        expect(() => results.component.toHaveTextContent(key));
      } else {
        expect(() => results.getByText('Fizz')).toThrow();
        expect(() => results.getByText('Buzz')).toThrow();
        expect(() => results.getByText('FizzBuzz')).toThrow();
      }
    });
  });
});