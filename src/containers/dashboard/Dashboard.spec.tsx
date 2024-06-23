import store from 'src/store/store';
import { Provider } from 'react-redux';
import { Dashboard } from './Dashboard';
import { GET_COUNTRIES } from '../../graphql/queries';
import { MockedProvider } from '@apollo/client/testing';
import { render, screen, waitFor } from '@testing-library/react';

const mocks = [
  {
    request: {
      query: GET_COUNTRIES,
    },
    result: {
      data: {
        countries: [
          { code: 'EE', name: 'Estonia' },
          { code: 'BE', name: 'Belgium' },
        ],
      },
    },
  },
  {
    request: {
      query: GET_COUNTRIES,
    },
    error: new Error('Error text'),
  },
];

const renderComponent = (mocks: any) =>
  render(
    <Provider store={store}>
      <MockedProvider mocks={mocks}>
        <Dashboard />
      </MockedProvider>
    </Provider>,
  );

describe('Dashboard', () => {
  it('should display loading spinner when data is being fetched', () => {
    renderComponent([]);
    expect(screen.getByRole('progressbar')).toBeInTheDocument();
  });

  it('should display error message when data fetch fails', async () => {
    const errorMocks = [
      {
        request: { query: GET_COUNTRIES },
        error: new Error('Error text'),
      },
    ];

    renderComponent(errorMocks);
    expect(await screen.findByText(/something went wrong/i)).toBeInTheDocument();
  });

  it('should display the country filter and table when data is successfully fetched', async () => {
    renderComponent(mocks);

    await waitFor(() => {
      expect(screen.getByText('Estonia')).toBeInTheDocument();
    });
    await waitFor(() => {
      expect(screen.getByText('Belgium')).toBeInTheDocument();
    });

    expect(screen.getByLabelText('Filter by country code')).toBeInTheDocument();
  });
});
