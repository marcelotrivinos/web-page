import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";

import { More } from "./More";
import { MemoryRouter } from "react-router-dom";

describe("", () => {
    it("", () => {
        
        render(<MemoryRouter>
                <More
                    category="Category Test" />
                </MemoryRouter>
        );
        const text = screen.getByText("More");
        expect(text).toBeInTheDocument();
    });
});
