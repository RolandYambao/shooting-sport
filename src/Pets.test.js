import { render, screen } from '@testing-library/react';
import Pets from './Pets';

test('renders Text tag', () => {
    render(<Pets />);
    const pElement = screen.getByText(/Home/i);
    expect(pElement).toBeInTheDocument();
});

test('renders Text tag', () => {
    render(<Pets />);
    const pElement = screen.getByText(/News/i);
    expect(pElement).toBeInTheDocument();
});

test('renders Text tag', () => {
    render(<Pets />);
    const pElement = screen.getByText(/Watch Competitions/i);
    expect(pElement).toBeInTheDocument();
});

test('renders Text tag', () => {
    render(<Pets />);
    const pElement = screen.getByText(/Buy Guns/i);
    expect(pElement).toBeInTheDocument();
});

test('renders Text tag', () => {
    render(<Pets />);
    const pElement = screen.getByText(/About Us/i);
    expect(pElement).toBeInTheDocument();
});

test('renders Text tag', () => {
    render(<Pets />);
    const pElement = screen.getByText(/Donate/i);
    expect(pElement).toBeInTheDocument();
});

test('renders Text tag', () => {
    render(<Pets />);
    const pElement = screen.getByText(/Account/i);
    expect(pElement).toBeInTheDocument();
});

test('renders Text tag', () => {
    render(<Pets />);
    const pElement = screen.getByText(/Shooting Around Pets/i);
    expect(pElement).toBeInTheDocument();
});

test('renders Text tag', () => {
    render(<Pets />);
    const pElement = screen.getByText(/@Bob/i);
    expect(pElement).toBeInTheDocument();
});

test('renders Text tag', () => {
    render(<Pets />);
    const pElement = screen.getByText(/Pets, we all love them, but/i);
    expect(pElement).toBeInTheDocument();
});