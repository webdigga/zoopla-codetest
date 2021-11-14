import { render, screen } from '@testing-library/react';
import Save from './Save';

test( 'renders the save button', () => {
	render(<Save />);
	expect( screen.getByText( /Save/i ) ).toBeInTheDocument();
});
