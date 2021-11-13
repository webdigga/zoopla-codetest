import { render, screen } from '@testing-library/react';
import Description from './Description';

test( 'renders the description', () => {
	render(<Description description = '2 bedroom maisonette for sale' />);
	expect( screen.getByText( /2 bedroom maisonette for sale/i ) ).toBeInTheDocument();
});
