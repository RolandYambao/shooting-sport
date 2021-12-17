import { render, screen } from '@testing-library/react';
import Shooting from './Shooting';

test('renders Text tag', () => {
    render(<Shooting />);
    const pElement = screen.getByText(/Competitive Musketry/i);
    expect(pElement).toBeInTheDocument();
});

test('renders Text tag', () => {
    render(<Shooting />);
    const pElement = screen.getByText(/Gun Explodes after Firing/i);
    expect(pElement).toBeInTheDocument();
});

test('renders Text tag', () => {
    render(<Shooting />);
    const pElement = screen.getByText(/Professional Shooter, Shoots his Own Foot/i);
    expect(pElement).toBeInTheDocument();
});

test('renders Text tag', () => {
    render(<Shooting />);
    const pElement = screen.getByText(/Ammunition Cost Rising/i);
    expect(pElement).toBeInTheDocument();
});

test('renders Text tag', () => {
    render(<Shooting />);
    const pElement = screen.getByText(/Ammunition Cost Still Rising/i);
    expect(pElement).toBeInTheDocument();
});

test('renders Text tag', () => {
    render(<Shooting />);
    const pElement = screen.getByText(/Great Places to Shoot/i);
    expect(pElement).toBeInTheDocument();
});

test('renders Text tag', () => {
    render(<Shooting />);
    const pElement = screen.getByText(/Revolutionary New Shooting Sport, Skeet Lobbing/i);
    expect(pElement).toBeInTheDocument();
});

test('renders Text tag', () => {
    render(<Shooting />);
    const pElement = screen.getByText(/Fewer People Watching Olympic Shooting Events/i);
    expect(pElement).toBeInTheDocument();
});


test('renders Text tag', () => {
    render(<Shooting />);
    const pElement = screen.getByText(/Jam Shooting/i);
    expect(pElement).toBeInTheDocument();
});

test('renders Text tag', () => {
    render(<Shooting />);
    const pElement = screen.getByText(/Gun Juggling/i);
    expect(pElement).toBeInTheDocument();
});

test('renders Text tag', () => {
    render(<Shooting />);
    const pElement = screen.getByText(/Bayonet Fighting/i);
    expect(pElement).toBeInTheDocument();
});

test('renders Text tag', () => {
    render(<Shooting />);
    const pElement = screen.getByText(/Sports Shooting/i);
    expect(pElement).toBeInTheDocument();
});
