


import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import "@testing-library/jest-dom";
import Counter from "./Counter";


//  1. Initial Render Test
test("renders initial count as 0", () => {
  render(<Counter />);
  expect(screen.getByText(/You Clicked 0 times/i)).toBeInTheDocument();
  expect(screen.getByText(/Counter is empty/i)).toBeInTheDocument();
});


//  2. Increment Test
test("increments count when increment button is clicked", async () => {
  render(<Counter />);
  const incrementBtn = screen.getByRole("button", { name: /increment/i });

  await userEvent.click(incrementBtn);

  expect(screen.getByText(/You Clicked 1 times/i)).toBeInTheDocument();
  expect(screen.getByText(/Counter is active/i)).toBeInTheDocument();
});


//  3. Decrement Test
test("decrements count when decrement button is clicked", async () => {
  render(<Counter />);
  const incrementBtn = screen.getByRole("button", { name: /increment/i });
  const decrementBtn = screen.getByRole("button", { name: /decrement/i });

  await userEvent.click(incrementBtn);  // count = 1
  await userEvent.click(decrementBtn);  // count = 0

  expect(screen.getByText(/You Clicked 0 times/i)).toBeInTheDocument();
});


//  4. Restart Test
test("resets count to 0 when restart button is clicked", async () => {
  render(<Counter />);
  const incrementBtn = screen.getByRole("button", { name: /increment/i });
  const restartBtn = screen.getByRole("button", { name: /restart/i });

  await userEvent.click(incrementBtn);  // count = 1
  await userEvent.click(restartBtn);    // count = 0

  expect(screen.getByText(/You Clicked 0 times/i)).toBeInTheDocument();
});


//  5. Decrement Button Disabled Test
test("decrement button is disabled when count is 0", () => {
  render(<Counter />);
  const decrementBtn = screen.getByRole("button", { name: /decrement/i });

  expect(decrementBtn).toBeDisabled();
});