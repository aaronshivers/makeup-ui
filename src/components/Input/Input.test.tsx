import React from 'react';
import { render, screen } from '@testing-library/react';
import { Input } from './Input';

describe('Input', () => {
  test('renders a default input', async () => {
    render(<Input />);
  });
});
