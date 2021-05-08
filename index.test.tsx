import { render, screen } from "@testing-library/react";

test("component is in the document", () => {
  render(<h1>Hello World</h1>);

  expect(screen.getByText(/hello world/i)).toBeInTheDocument();
});
