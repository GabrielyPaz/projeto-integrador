import "@testing-library/jest-dom";
import { render } from "@testing-library/react";
import { describe, test, expect } from "vitest";

import DetailInformacao from './DetailInformacao';

describe("DetailInformacao", () => {
    test("Should be able to see the initial text on screen", () => { 
        const { getByText } = render(<DetailInformacao />);
        
        expect(getByText("O que você precisa saber")).toBeInTheDocument();
        
    })
});