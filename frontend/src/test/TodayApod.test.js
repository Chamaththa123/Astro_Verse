import React from 'react';
import { render, waitFor } from '@testing-library/react';
import TodayApod from '../pages/apod/TodayApod';

jest.mock('react', () => ({
  ...jest.requireActual('react'),
  useState: jest.fn(),
  useEffect: jest.fn(),
}));

describe('TodayApod component', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  test('fetches APOD data successfully', async () => {
    const mockData = {
      title: 'Test APOD',
      media_type: 'image',
      hdurl: 'https://example.com/image.jpg',
      explanation: 'Test explanation',
      copyright: 'Test copyright',
    };

    const mockResponse = {
      ok: true,
      json: jest.fn().mockResolvedValueOnce(mockData),
    };

    global.fetch = jest.fn().mockResolvedValueOnce(mockResponse);

    useState.mockImplementationOnce(() => [mockData, jest.fn()]); // Mock useState with initial APOD data

    render(<TodayApod />);

    await waitFor(() => {
      expect(fetch).toHaveBeenCalledWith(expect.any(String));
      expect(fetch).toHaveBeenCalledTimes(1);
      expect(useState).toHaveBeenCalledTimes(1);
      expect(useEffect).toHaveBeenCalledTimes(2);
    });
  });

  test('handles fetch error', async () => {
    const mockErrorMessage = 'Failed to fetch APOD data';

    const mockResponse = {
      ok: false,
    };

    global.fetch = jest.fn().mockResolvedValueOnce(mockResponse);

    const mockSetError = jest.fn();

    useState.mockImplementationOnce(() => [null, jest.fn()]); // Mock useState with null APOD data
    useState.mockImplementationOnce(() => [true, jest.fn()]); // Mock useState for image loading
    useState.mockImplementationOnce(() => [mockErrorMessage, mockSetError]); // Mock useState for error

    render(<TodayApod />);

    await waitFor(() => {
      expect(fetch).toHaveBeenCalledWith(expect.any(String));
      expect(fetch).toHaveBeenCalledTimes(1);
      expect(useState).toHaveBeenCalledTimes(3);
      expect(useEffect).toHaveBeenCalledTimes(1);
      expect(mockSetError).toHaveBeenCalledWith(mockErrorMessage);
    });
  });
});
