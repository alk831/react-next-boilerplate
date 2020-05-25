import React from 'react';
import { IndexPage } from './index';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

describe('<IndexPage />', () => {
  describe('when clicking increment button', () => {
    it('should increment counter', () => {
      render(<IndexPage />);

      const incrementButton = screen.getByRole('button', { name: /Click to increment/i });
      userEvent.click(incrementButton);

      const incrementedCounterText = screen.getByText('You have pressed button 1 times');

      expect(incrementedCounterText).toBeInTheDocument();
    });
  });
});