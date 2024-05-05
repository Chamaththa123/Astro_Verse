import React from 'react';
import { render, fireEvent, waitFor } from '@testing-library/react';
import AllMrp from '../pages/mrp/AllMrp';

describe('AllMrp component', () => {
  test('renders without crashing', () => {
    render(<AllMrp />);
  });

  test('fetches MRP data when date is set', async () => {
    const { getByLabelText } = render(<AllMrp />);

    const dateInput = getByLabelText('Select Date');
    fireEvent.change(dateInput, { target: { value: '2024-05-01' } });

    await waitFor(() => {
      expect(fetch).toHaveBeenCalledWith(expect.stringContaining('earth_date=2024-05-01'));
      expect(fetch).toHaveBeenCalledTimes(1);
    });
  });

  test('filters photos based on selected camera', async () => {
    const { getByLabelText, getByText } = render(<AllMrp />);

    const dateInput = getByLabelText('Select Date');
    fireEvent.change(dateInput, { target: { value: '2024-05-01' } });

    await waitFor(() => {
      const cameraSelect = getByLabelText('Select Camera');
      fireEvent.change(cameraSelect, { target: { value: 'FHAZ' } });

      expect(fetch).toHaveBeenCalledWith(expect.stringContaining('earth_date=2024-05-01'));
      expect(fetch).toHaveBeenCalledTimes(2); 
      expect(getByText('FHAZ')).toBeInTheDocument();
    });
  });

  test('displays pagination buttons', async () => {
    const { getByText } = render(<AllMrp />);

    await waitFor(() => {
      expect(getByText('1')).toBeInTheDocument();
    });
  });

});
