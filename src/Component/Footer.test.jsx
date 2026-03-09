import {render , screen} from "@testing-library/react";
import '@testing-library/jest-dom'
import Footer from "./Footer";

test("renders footer content correctly", () => {
    render(<Footer />);



    const footerelement = screen.getByText(/© 2024 React Day1. All rights reserved./i);
    expect(footerelement).toBeInTheDocument();

});
