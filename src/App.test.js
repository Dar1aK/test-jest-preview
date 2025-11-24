import { render, screen } from "@testing-library/react";
import App from "./App";
import { debug } from "jest-preview";

test("renders learn react link", () => {
  render(<App />);

  // eslint-disable-next-line testing-library/no-debugging-utils
  debug();

  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
