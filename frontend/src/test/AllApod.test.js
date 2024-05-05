import React from 'react';
import { render, fireEvent, waitFor } from '@testing-library/react';
import AllApod from '../pages/apod/AllApod';

describe('AllApod component', () => {
  test('renders without crashing', () => {
    render(<AllApod />);
  });

  test('fetches APOD data when start and end dates are set', async () => {
    const { getByLabelText, getByText } = render(<AllApod />);

    const startDateInput = getByLabelText('Start Date:');
    const endDateInput = getByLabelText('End Date:');
    const submitButton = getByText('Submit');

    fireEvent.change(startDateInput, { target: { value: '2024-05-01' } });
    fireEvent.change(endDateInput, { target: { value: '2024-05-05' } });
    fireEvent.click(submitButton);

    await waitFor(() => {
      expect(fetch).toHaveBeenCalledWith(expect.stringContaining('start_date=2024-05-01'));
      expect(fetch).toHaveBeenCalledWith(expect.stringContaining('end_date=2024-05-05'));
      expect(fetch).toHaveBeenCalledTimes(1); 
    });
  });

  test('displays pagination buttons', () => {
    const { getByText } = render(<AllApod />);
    const pageButton1 = getByText('1');
    const pageButton2 = getByText('2');
    expect(pageButton1).toBeInTheDocument();
    expect(pageButton2).toBeInTheDocument();
  });

});
