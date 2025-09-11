import React from 'react';
import { render, screen } from '@testing-library/react';
import mockRouter from 'next-router-mock';
import { Header } from '../Header';

jest.mock('next/router', () => mockRouter);

describe('Header Component', () => {
  beforeEach(() => {
    render(<Header />);
  });

  it('should render the logo', () => {
    const logoElement = screen.getByText('CHATBOT');
    expect(logoElement).toBeInTheDocument();
  });

  it('should render all navigation links', () => {
    expect(screen.getByRole('link', { name: 'Home' })).toBeInTheDocument();
    expect(screen.getByRole('link', { name: 'About' })).toBeInTheDocument();
    expect(screen.getByRole('link', { name: 'Projects' })).toBeInTheDocument();
    expect(screen.getByRole('link', { name: 'Blog' })).toBeInTheDocument();
  });

  it('should render the language switcher flags', () => {
    const ptFlag = screen.getByAltText('Mudar para Português');
    const enFlag = screen.getByAltText('Switch to English');
    expect(ptFlag).toBeInTheDocument();
    expect(enFlag).toBeInTheDocument();
  });
});
