import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";

import { CategoryTitle } from "./CategoryTitle";

describe("", () => {
    it("", () => {
        render(<CategoryTitle title="Test" />);
        const title = screen.getByText("Test");
        expect(title).toBeInTheDocument();
    });
});