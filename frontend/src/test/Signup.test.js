import React from 'react';
import { render, fireEvent, waitFor } from '@testing-library/react';
import axios from 'axios';
import SignUp from '../pages/user/SignUp';

// Mock axios
jest.mock('axios');

describe('SignUp component', () => {
  test('renders without crashing', () => {
    render(<SignUp />);
  });

  test('submits form with valid data', async () => {
    const onSuccessMock = jest.fn();
    const mockedResponse = { data: { success: true } };
    axios.post.mockResolvedValueOnce(mockedResponse);

    const { getByLabelText, getByText } = render(<SignUp />);
    const emailInput = getByLabelText('Email');
    const firstNameInput = getByLabelText('First Name');
    const lastNameInput = getByLabelText('Last Name');
    const passwordInput = getByLabelText('Password');
    const signUpButton = getByText('Sign Up');

    fireEvent.change(emailInput, { target: { value: 'test@example.com' } });
    fireEvent.change(firstNameInput, { target: { value: 'John' } });
    fireEvent.change(lastNameInput, { target: { value: 'Doe' } });
    fireEvent.change(passwordInput, { target: { value: 'password123' } });
    fireEvent.click(signUpButton);

    await waitFor(() => {
      expect(axios.post).toHaveBeenCalledWith(
        'http://chamaththa.infinitoapparel.ca/api/users/register',
        {
          email: 'test@example.com',
          firstName: 'John',
          lastName: 'Doe',
          password: 'password123',
        }
      );
      expect(onSuccessMock).toHaveBeenCalled();
    });
  });

  test('displays form errors with invalid data', async () => {
    const { getByText } = render(<SignUp />);
    const signUpButton = getByText('Sign Up');

    fireEvent.click(signUpButton);

    await waitFor(() => {
      expect(getByText('Email is Required.')).toBeInTheDocument();
      expect(getByText('First Name is Required.')).toBeInTheDocument();
      expect(getByText('Last Name is Required.')).toBeInTheDocument();
      expect(getByText('Password is Required.')).toBeInTheDocument();
    });
  });

  test('handles server error', async () => {
    axios.post.mockRejectedValueOnce();

    const { getByText } = render(<SignUp />);
    const signUpButton = getByText('Sign Up');

    fireEvent.click(signUpButton);

    await waitFor(() => {
      expect(axios.post).toHaveBeenCalled();
      expect(getByText('Registration failed.')).toBeInTheDocument();
    });
  });
});
