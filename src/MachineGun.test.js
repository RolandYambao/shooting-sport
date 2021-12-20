import { render, screen } from '@testing-library/react';
import MachineGun from './MachineGun';

test('renders Text tag', () => {
    render(<MachineGun />);
    const pElement = screen.getByText(/Fewer People Watching Olympic Shooting Events/i);
    expect(pElement).toBeInTheDocument();
});

test('renders Text tag', () => {
    render(<MachineGun />);
    const pElement = screen.getByText(/Olympic Committee Perplexed/i);
    expect(pElement).toBeInTheDocument();
});

test('renders Text tag', () => {
    render(<MachineGun />);
    const pElement = screen.getByText(/A Bold Solution/i);
    expect(pElement).toBeInTheDocument();
});

test('renders Text tag', () => {
    render(<MachineGun />);
    const pElement = screen.getByText(/Management Suggests Utilizing Machine Guns to Attract more Viewers/i);
    expect(pElement).toBeInTheDocument();
});

test('renders Text tag', () => {
    render(<MachineGun />);
    const pElement = screen.getByText(/Is it Safe?/i);
    expect(pElement).toBeInTheDocument();
});

test('renders Text tag', () => {
    render(<MachineGun />);
    const pElement = screen.getByText(/Experts agree, machine guns in competitive shooting are perfectly safe, simply avoid aiming at people/i);
    expect(pElement).toBeInTheDocument();
});

test('renders Text tag', () => {
    render(<MachineGun />);
    const pElement = screen.getByText(/The upcoming Olympic Event will have Professional Machine Gunners/i);
    expect(pElement).toBeInTheDocument();
});

test('renders Text tag', () => {
    render(<MachineGun />);
    const pElement = screen.getByText(/The Olympic Commitee will expect a large viewership growth soon/i);
    expect(pElement).toBeInTheDocument();
});

test('renders Text tag', () => {
    render(<MachineGun />);
    const pElement = screen.getByText(/Join our Email List Today/i);
    expect(pElement).toBeInTheDocument();
});


test('renders Text tag', () => {
    render(<MachineGun />);
    const pElement = screen.getByText(/Add your name and email here to join the Shooting Sports International!/i);
    expect(pElement).toBeInTheDocument();
});
