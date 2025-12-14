import { render, screen, fireEvent } from '@testing-library/react';
import Header from '../components/Header.js';
import Cart from '../components/Cart.js';
import { act } from 'react';
import '@testing-library/jest-dom';
import { Provider } from 'react-redux';
import { BrowserRouter, MemoryRouter, Routes, Route } from "react-router-dom";
import appStore from '../utils/appStore/appStore.js';
import RestaurantMenu from '../components/RestaurantMenu.js';
import Mock_RES_MENU_DATA from './mocks/resMenuData';

global.fetch = jest.fn(() => {
    return Promise.resolve({
        ok: true,
        json: () => {
            return Promise.resolve(Mock_RES_MENU_DATA);
        }
    })
})


describe('Cart Component', () => {
    it('should test cart flow', async () => {

        await act(async () => {
            render(
                <BrowserRouter
                    future={{
                        v7_relativeSplatPath: true,
                        v7_startTransition: true,
                    }}
                >
                    <Provider store={appStore}>
                        <RestaurantMenu />
                        <Header />
                        <Cart />
                    </Provider>
                </BrowserRouter>
            )
        })

        const accordianHeader = await screen.findByText(
            "Specialty Pizzas (2)"
        );


        fireEvent.click(accordianHeader);

        const addButton = await screen.findAllByText('Add');

        fireEvent.click(addButton[0]);

        const cartItem = screen.getByText('Cart 🛒 - 1')

        //Asssertion
        expect(cartItem).toBeInTheDocument();


        fireEvent.click(addButton[1]);

        const cartItems = screen.getByText('Cart 🛒 - 2')

        //Asssertion
        expect(cartItems).toBeInTheDocument();

        const cartItemsinCart = await screen.getAllByTestId("cart-items");

        expect(cartItemsinCart.length).toBe(2);

        const clearCartButton = screen.getByText('Clear Cart');

        fireEvent.click(clearCartButton);

        const emptyCartMessage = screen.getByText('Your cart is empty');

        //Asssertion
        expect(emptyCartMessage).toBeInTheDocument();
    })
})
