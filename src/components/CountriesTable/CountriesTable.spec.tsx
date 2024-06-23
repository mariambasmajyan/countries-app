import { Provider } from 'react-redux';
import { RootState } from 'src/store/store';
import configureStore from 'redux-mock-store';
import { CountriesTable } from './CountriesTable';
import { render, screen } from '@testing-library/react';

const mockStore = configureStore<RootState>([]);

describe('CountriesTable', () => {
  let store: ReturnType<typeof mockStore>;

  beforeEach(() => {
    store = mockStore({
      countries: {
        countries: [
          { code: 'EE', name: 'Estonia' },
          { code: 'BE', name: 'Belgium' },
        ],
        filter: '',
      },
    });
  });

  it('renders "No data available" when there are no countries', () => {
    store = mockStore({
      countries: {
        countries: [],
        filter: '',
      },
    });

    render(
      <Provider store={store}>
        <CountriesTable />
      </Provider>,
    );

    expect(screen.getByText('No data available')).toBeInTheDocument();
  });

  it('renders table with countries', () => {
    render(
      <Provider store={store}>
        <CountriesTable />
      </Provider>,
    );

    expect(screen.getByText('Estonia')).toBeInTheDocument();
    expect(screen.getByText('Belgium')).toBeInTheDocument();
  });

  it('renders filtered countries', () => {
    store = mockStore({
      countries: {
        countries: [
          { code: 'EE', name: 'Estonia' },
          { code: 'BE', name: 'Belgium' },
        ],
        filter: 'BE',
      },
    });

    render(
      <Provider store={store}>
        <CountriesTable />
      </Provider>,
    );

    expect(screen.getByText('Belgium')).toBeInTheDocument();
    expect(screen.queryByText('Estonia')).not.toBeInTheDocument();
  });
});
