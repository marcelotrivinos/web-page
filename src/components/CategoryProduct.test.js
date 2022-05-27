import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";

import { CategoryProduct } from "./CategoryProduct";
import { MemoryRouter } from "react-router-dom";

describe("", () => {
    it("", () => {
        const props = {
            title: "Title",
            dataProducts: [{
                id: 0,
                image_url: "",
                name: "P"
            }],
            quantity: 1,
            category: "Category" }

        
        render(<MemoryRouter>
                <CategoryProduct
                    { ...props } />
                </MemoryRouter>
        );
        const title = screen.getByText("Title");
        expect(title).toBeInTheDocument();
    });
});