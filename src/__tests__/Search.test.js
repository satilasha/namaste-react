import { render, screen, fireEvent } from '@testing-library/react'
import MOCK_RES_lIST_DATA from "./mocks/resListData";
import { BrowserRouter } from 'react-router-dom';
import "@testing-library/jest-dom"
import Body from '../components/Body';
import { act } from 'react';

global.fetch = jest.fn(() => {
    return Promise.resolve({
        json: () => {
            return Promise.resolve(MOCK_RES_lIST_DATA);
        }
    })
})

describe('Body Component', () => {
    it('should Search component with input text as Burger', async () => {

        await act(async () => {
            render(
                <BrowserRouter future={{
                    v7_relativeSplatPath: true,
                    v7_startTransition: true,
                }}>
                    <Body />
                </BrowserRouter>
            )
        })

        const searchButton = screen.getByRole('button', { name: 'Search' });

        const restaurantCards = await screen.findAllByTestId("restaurant-card");

        expect(restaurantCards.length).toBe(9);

        const inputBox = screen.getByTestId("searchInput")

        fireEvent.change(inputBox, { target: { value: 'Burger' } });

        fireEvent.click(searchButton);

        const filteredRestaurantCards = await screen.findAllByTestId("restaurant-card");

        expect(filteredRestaurantCards.length).toBe(1);
    })

     it('should render restaurant cards with top rated restaurants', async () => {

        await act(async () => {
            render(
                <BrowserRouter future={{
                    v7_relativeSplatPath: true,
                    v7_startTransition: true,
                }}>
                    <Body />
                </BrowserRouter>
            )
        })

        const searchButton = screen.getByRole('button', { name: 'Top Rated Restaurants' });

        fireEvent.click(searchButton);

        const restaurantCards = await screen.findAllByTestId("restaurant-card");

        expect(restaurantCards.length).toBe(2);
    })
})