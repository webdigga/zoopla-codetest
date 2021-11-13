import { render, screen } from '@testing-library/react';
import App from './App';

test( 'renders product listing title', () => {
	render(<App />);
	expect( screen.getByText( /Product listing/i ) ).toBeInTheDocument();
});
