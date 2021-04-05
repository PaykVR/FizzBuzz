import { render } from "@testing-library/svelte";
import App from "./App.svelte";

test("App Container should render and greet the user", () => {
  const results = render(App, { props: { name: "Chris" } });

  expect(() => results.getByText("Hello Chris!")).not.toThrow();
});
