import '@testing-library/jest-dom';
import { TextInput } from './TextInput';
import { render, fireEvent, screen } from '@testing-library/react';

describe('TextInput', () => {
  it('should render the TextInput component', () => {
    render(<TextInput onChange={() => {}} />);

    const inputElement = screen.getByRole('textbox');
    expect(inputElement).toBeInTheDocument();
  });

  it('should pass additional props to the input element', () => {
    render(<TextInput onChange={() => {}} placeholder="Placeholder" />);

    const inputElement = screen.getByPlaceholderText('Placeholder');
    expect(inputElement).toBeInTheDocument();
  });

  it('should call onChange handler when the input value changes', () => {
    const handleChange = jest.fn();
    render(<TextInput onChange={handleChange} />);

    const inputElement = screen.getByRole('textbox');
    fireEvent.change(inputElement, { target: { value: 'test' } });

    expect(handleChange).toHaveBeenCalledTimes(1);
    expect((inputElement as HTMLInputElement).value).toBe('test');
  });
});
