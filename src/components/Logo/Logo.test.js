import { render, screen } from '@testing-library/react';
import Logo from './Logo';

test( 'renders the logo', () => {
	render(<Logo logo = 'https://picsum.photos/id/175/73/39' />);
	expect( screen.getByAltText( /Estate agent logo/i ) ).toBeInTheDocument();
});
