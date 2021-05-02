import { render, screen } from '@testing-library/react';
import Aboutme from "./components/Aboutme.component";


test('Bryant Conti Cloud Computing Enthusiast', () => {
    render(<Aboutme />);
    const linkElement = screen.getByText(/About Me/i);
    expect(linkElement).toBeInTheDocument();
});


