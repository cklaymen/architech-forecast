import { render, screen } from "@testing-library/react";
import App from "./App";

test("renders app placeholder", () => {
  render(<App />);
  const linkElement = screen.getByText(/_APP_/i);
  expect(linkElement).toBeInTheDocument();
});
