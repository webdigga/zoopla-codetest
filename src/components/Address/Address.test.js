import { render, screen } from '@testing-library/react';
import Address from './Address';

test( 'renders the address', () => {
	render(<Address address = '22 Acacia avenue' />);
	expect( screen.getByText( /22 Acacia avenue/i ) ).toBeInTheDocument();
});
