import { render , screen } from "@testing-library/react";
import '@testing-library/jest-dom'
import Header from "./Header";


test("renders app name and menu item correctly", () => {
  const menuItems = ["Home", "About", "Contact"];

  render(
    <Header 
      appName="React Day" 
      menuItems={menuItems} 
    />
  );

  const headingElement = screen.getByText(/React Day/i);
  expect(headingElement).toBeInTheDocument();

  menuItems.forEach((item) => {
    expect(screen.getByText(item)).toBeInTheDocument();
  

  
}); 
})

