import { render, screen } from '@testing-library/react';
import Image from './Image';

test( 'renders the image', () => {
	const item = {
		"id": 1,
		"image": "https://picsum.photos/id/1029/430/310",
		"numberOfRooms": "2",
		"address": "22 Acacia avenue",
		"postcode": "N56 6NU",
		"description": "2 bedroom maisonette for sale",
		"askingPrice": "£350,000",
		"status": "active",
		"dateListed": "23rd February 2021",
		"logo": "https://picsum.photos/id/175/73/39"
	};

	const myMock = jest.fn();

	render(<Image item = { item } onStatusClick = { myMock } />);
	expect( screen.getByAltText( /Property for sale/i ) ).toBeInTheDocument();
});
