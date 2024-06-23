import store from './store/store';
import client from './graphql/client';
import { Provider } from 'react-redux';
import { ApolloProvider } from '@apollo/client';
import { Dashboard } from './containers/dashboard/Dashboard';

export const App = () => (
  <ApolloProvider client={client}>
    <Provider store={store}>
      <Dashboard />
    </Provider>
  </ApolloProvider>
);
