import { render, screen, fireEvent } from '@testing-library/react'
import Header from '../components/Header.js';
import '@testing-library/jest-dom'
import { Provider } from 'react-redux';
import { BrowserRouter, Link } from "react-router-dom";
import appStore from '../utils/appStore/appStore.js';

describe('Header Component', () => {
    it('should render Header component with login Button', () => {
        render(
            <BrowserRouter future={{
                v7_relativeSplatPath: true,
                v7_startTransition: true,
            }}>
                <Provider store={appStore}>
                    <Header />;
                </Provider>
            </BrowserRouter>)


        const button = screen.getByRole('button');

        //Asssertion
        expect(button).toBeInTheDocument();
    })

    it('should render Header component with cart Item', () => {
        render(
            <BrowserRouter future={{
                v7_relativeSplatPath: true,
                v7_startTransition: true,
            }}>
                <Provider store={appStore}>
                    <Header />;
                </Provider>
            </BrowserRouter>)


        const cartItem = screen.getByText('Cart 🛒 - 0');

        //Asssertion
        expect(cartItem).toBeInTheDocument();
    })

     it('should render Header component with cart ', () => {
        render(
            <BrowserRouter future={{
                v7_relativeSplatPath: true,
                v7_startTransition: true,
            }}>
                <Provider store={appStore}>
                    <Header />;
                </Provider>
            </BrowserRouter>)


        const cart = screen.getByText(/Cart/);

        //Asssertion
        expect(cart).toBeInTheDocument();
    })

    it('should render Header component with login button ', () => {
        render(
            <BrowserRouter future={{
                v7_relativeSplatPath: true,
                v7_startTransition: true,
            }}>
                <Provider store={appStore}>
                    <Header />;
                </Provider>
            </BrowserRouter>)


        const loginButton = screen.getByRole('button', { name: 'Login' });

        fireEvent.click(loginButton);

        const logoutButton = screen.getByRole('button', { name: 'Logout' });

        //Asssertion
        expect(logoutButton).toBeInTheDocument();
    })
})