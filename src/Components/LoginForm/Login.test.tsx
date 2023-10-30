import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/react';
import LoginForm from './LoginForm';
import Register from '../../pages/Register/Register';
import Login from './LoginForm';

describe('Login', () => {

    test('given email, when empty, then show requerid error message', async () => {
        render(<LoginForm />);

        const email = screen.getByTestId('email');

        await userEvent.type(email, "anyValue");
        await userEvent.clear(email);

        const requireError = screen.queryByTestId('email-required');
        expect(requireError).not.toBeNull();
    })

    test('given email, when has value, then hide requerid error message', async () => {
        render(<LoginForm />);

        const email = screen.getByTestId('email');

        await userEvent.type(email, "anyValue");
        
        const requireError = screen.queryByTestId('email-required');
        expect(requireError).toBeNull();
    })

    test('given email, when field not chagend, then hide requerid error message', async () => {
        render(<LoginForm />);

        const requireError = screen.queryByTestId('email-required');
        expect(requireError).toBeNull();       
    })

    test('given email, when invalid, then show invalid error message', async () => {
        render(<LoginForm />);

        const email = screen.getByTestId('email');

        await userEvent.type(email, "anyValue");
        
        const requireError = screen.queryByTestId('email-invalid');
        expect(requireError).not.toBeNull();
    })

    test('given password, when empty, then show requerid error message', async () => {
        render(<LoginForm />);

        const password = screen.getByTestId('password');

        await userEvent.type(password, "anyValue");
        await userEvent.clear(password);

        const requireError = screen.queryByTestId('password-required');
        expect(requireError).not.toBeNull();
    })

    test('given password, when has value, then hide requerid error message', async () => {
        render(<LoginForm />);

        const password = screen.getByTestId('password');

        await userEvent.type(password, "anyValue");
        
        const requireError = screen.queryByTestId('password-required');
        expect(requireError).toBeNull();
    })

    test('given email, when empty, then disable recover password button', async () => {
        render(<LoginForm />);

        const recoverPasswordButton = screen.getByTestId('recover-password-button');

        expect(recoverPasswordButton).toBeDisabled();
    })

    test('given email, when valid, then enable recover password button', async () => {
        render(<LoginForm />);

        const email = screen.getByTestId('email');
        userEvent.type(email, "valid@email.com");

        const recoverPasswordButton = screen.getByTestId('recover-password-button');

        expect(recoverPasswordButton).not.toBeDisabled();
    })

    test('given form invalid, then disbale login button', async () => {
        render(<LoginForm />);

        const logindButton = screen.getByTestId('login-button');

        expect(logindButton).toBeDisabled();
    })

    test('given form valid, then enable login button', async () => {
        render(<LoginForm />);

        const email = screen.getByTestId('email');
        userEvent.type(email, "valid@email.com");
        const password = screen.getByTestId('password');
        userEvent.type(password, "anyValue");

        const loginButton = screen.getByTestId('login-button');

        expect(loginButton).not.toBeDisabled();
    })

    test('given user clicks on register button, then go to register page', () => {
        renderLoginForm();
    
        const registerButton = screen.getByTestId('register-button');
        userEvent.click(registerButton);
    
        expect(window.location.pathname).toEqual('/register');
      })   
     
      
})

function renderLoginForm() {
    throw new Error('Function not implemented.');
}
