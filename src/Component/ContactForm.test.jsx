import { render, screen, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";
import ContactForm from "./ContactForm";

test("renders Contact Us heading", () => {
  render(<ContactForm />);
  expect(screen.getByText("Contact Us")).toBeInTheDocument();
});

test("renders all form fields", () => {
  render(<ContactForm />);
  
  expect(screen.getByPlaceholderText("Enter Your Name")).toBeInTheDocument();
  expect(screen.getByPlaceholderText("Enter Your Email")).toBeInTheDocument();
  expect(screen.getByPlaceholderText("Enter Your Message")).toBeInTheDocument();
});

test("renders submit button", () => {
  render(<ContactForm />);
  expect(screen.getByText("Submit")).toBeInTheDocument();
});

test("user can type in name field", () => {
  render(<ContactForm />);
  
  const nameInput = screen.getByPlaceholderText("Enter Your Name");
  
  fireEvent.change(nameInput, { target: { value: "Gaurav" } });

  expect(nameInput.value).toBe("Gaurav");
});