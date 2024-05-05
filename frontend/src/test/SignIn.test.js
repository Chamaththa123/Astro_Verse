import React from 'react';
import { render, fireEvent, waitFor } from '@testing-library/react';
import axios from 'axios'; 
import { SignIn } from '../pages/user/SignIn';

// Mock axios
jest.mock('axios');

describe('SignIn component', () => {
  test('renders without crashing', () => {
    render(<SignIn />);
  });

  test('submits form with valid data', async () => {
    const mockedUser = { id: 1, email: 'test@example.com' };
    const mockedToken = 'mockedToken';
    const onSuccessMock = jest.fn();

    axios.post.mockResolvedValueOnce({ data: { user: mockedUser, token: mockedToken } });

    const { getByLabelText, getByText } = render(<SignIn onSuccess={onSuccessMock} />);

    const emailInput = getByLabelText('Email');
    const passwordInput = getByLabelText('Password');
    const signInButton = getByText('Sign In');

    fireEvent.change(emailInput, { target: { value: 'test@example.com' } });
    fireEvent.change(passwordInput, { target: { value: 'password123' } });
    fireEvent.click(signInButton);

    await waitFor(() => {
      expect(axios.post).toHaveBeenCalledWith(
        'http://chamaththa.infinitoapparel.ca/api/users/login',
        { email: 'test@example.com', password: 'password123' }
      );
      expect(onSuccessMock).toHaveBeenCalled();
    });
  });

  test('displays form errors with invalid data', async () => {
    const { getByText } = render(<SignIn />);
    const signInButton = getByText('Sign In');

    fireEvent.click(signInButton);

    await waitFor(() => {
      expect(getByText('Email is required')).toBeInTheDocument();
      expect(getByText('Password is required')).toBeInTheDocument();
    });
  });

  test('handles server error', async () => {
    const onErrorMock = jest.fn();
    axios.post.mockRejectedValueOnce({ response: { status: 401 } });

    const { getByLabelText, getByText } = render(<SignIn onError={onErrorMock} />);

    const emailInput = getByLabelText('Email');
    const passwordInput = getByLabelText('Password');
    const signInButton = getByText('Sign In');

    fireEvent.change(emailInput, { target: { value: 'test@example.com' } });
    fireEvent.change(passwordInput, { target: { value: 'password123' } });
    fireEvent.click(signInButton);

    await waitFor(() => {
      expect(axios.post).toHaveBeenCalled();
      expect(onErrorMock).toHaveBeenCalledWith('Invalid email or password');
    });
  });
});
