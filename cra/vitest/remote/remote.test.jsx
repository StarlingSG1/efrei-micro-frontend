import React from 'react';
import {describe, it, expect } from 'vitest';
import { Title } from '../../remote/src/components/Title';
import { render, screen, act } from '@testing-library/react';


describe('Title Component', async () => {
  it('should render the Title component with the text content "Voici le titre"', async () => {
    await act(async () => {
      render(<Title>Voici le titre</Title>);
    });
    const titleElement = screen.getByRole('heading', { level: 1 });
    expect(titleElement).toHaveTextContent('Voici le titre');
  });

  it('should render Bonjour', async () => {
    await act(async () => {
      render(<Title>Bonjour</Title>);
    });
    const titleElement = screen.getByRole('heading', { level: 1 });
    expect(titleElement).toHaveTextContent('Bonjour');
  });
});

