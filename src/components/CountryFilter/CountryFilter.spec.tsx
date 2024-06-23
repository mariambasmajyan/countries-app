import store from 'src/store/store';
import { Provider } from 'react-redux';
import { CountryFilter } from './CountryFilter';
import { render, screen, fireEvent } from '@testing-library/react';

describe('CountryFilter', () => {
  it('should render filter input', () => {
    render(
      <Provider store={store}>
        <CountryFilter />
      </Provider>,
    );

    const inputElement = screen.getByLabelText('Filter by country code');
    expect(inputElement).toBeInTheDocument();
  });

  it('updates filter state on input change', () => {
    render(
      <Provider store={store}>
        <CountryFilter />
      </Provider>,
    );

    const inputElement = screen.getByLabelText(/Filter by country code/i);
    fireEvent.change(inputElement, { target: { value: 'AM' } });
    expect(store.getState().countries.filter).toBe('AM');
  });
});
