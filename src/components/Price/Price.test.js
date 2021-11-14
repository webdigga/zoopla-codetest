import { render, screen } from '@testing-library/react';
import Price from './Price';

test( 'renders the price', () => {
	render(<Price askingPrice = '£350,000' />);
	expect( screen.getByText( /£350,000/i ) ).toBeInTheDocument();
});
