import { render, screen } from '@testing-library/react';
import Rooms from './Rooms';

test( 'renders the number of rooms', () => {
	render(<Rooms numberOfRooms = '2' />);
	expect( screen.getByText( /2/i ) ).toBeInTheDocument();
});
