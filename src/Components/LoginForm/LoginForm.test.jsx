import '@testing-library/jest-dom';
import { render } from "@testing-library/react";
import { describe, test, expect } from "vitest";
import { MemoryRouter } from 'react-router-dom'; // Importa o MemoryRouter
import LoginForm from "./LoginForm";

const buttonTestId = "button";

describe("LoginForm", () => {
    test("Should be able to render the button", () => {
        const { getByTestId } = render(
        <MemoryRouter>
            <LoginForm>Entrar</LoginForm>
        </MemoryRouter>
        );
        expect(getByTestId(buttonTestId)).toBeInTheDocument(); 
    
    });
})