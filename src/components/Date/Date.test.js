import { render, screen } from '@testing-library/react';
import Date from './Date';

test( 'renders the date', () => {
	render(<Date date = '23rd February 2021' />);
	expect( screen.getByText( /23rd February 2021/i ) ).toBeInTheDocument();
});
