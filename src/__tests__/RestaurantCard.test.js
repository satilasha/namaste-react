import { render, screen } from '@testing-library/react'
import { RestaurantCard ,withPromotedLabel  } from '../components/RestaurantCard.js';
import '@testing-library/jest-dom';
import MOCK_RES_CARD_DATA from "./mocks/resCardData";

describe('RestaurantCard Component', () => {
    it('should render RestaurantCard component', () => {

        render(<RestaurantCard resData={MOCK_RES_CARD_DATA} />);

        const restaurantName = screen.getByText('Chinese Dragon');

        //Asssertion
        expect(restaurantName).toBeInTheDocument();
    })

    it('should render RestaurantCard component with promoted label', () => {
        const PromotedRestaurantCard = withPromotedLabel(RestaurantCard);

        render(<PromotedRestaurantCard resData={MOCK_RES_CARD_DATA} />);

        const promotedLabel = screen.getByText('Promoted');

        //Asssertion
        expect(promotedLabel).toBeInTheDocument();
        
    })
})