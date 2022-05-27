import React from "react";
import { render, fireEvent, screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";

import { Search } from "./Search";

describe("Input value", () => {
    it("updates on change", () => {
        const setText = jest.fn((value) => {})
        const { queryByPlaceholderText } = render(<Search callback={ setText }/>)
        const searchInput = queryByPlaceholderText("Buscar")
        fireEvent.change(searchInput, { target: { value: "test" } })
        expect(searchInput.value).toBe("test")
    })
})
