import { useEffect } from 'react';
import { useQuery } from '@apollo/client';
import { useDispatch } from 'react-redux';
import { GET_COUNTRIES } from '../../graphql/queries';
import { setCountries } from 'src/store/countriesSlice';
import { CountryFilter } from 'src/components/CountryFilter/CountryFilter';
import { Container, Typography, CircularProgress, Box } from '@mui/material';
import { CountriesTable } from 'src/components/CountriesTable/CountriesTable';

export const Dashboard = () => {
  const { loading, error, data } = useQuery(GET_COUNTRIES);
  const dispatch = useDispatch();

  useEffect(() => {
    if (data) {
      dispatch(setCountries(data.countries));
    }
  }, [data, dispatch]);

  if (loading) {
    return (
      <Box display="flex" justifyContent="center" alignItems="center" height="100vh">
        <CircularProgress />
      </Box>
    );
  }

  if (error)
    return <Typography variant="h2">Something went wrong. Please try again laater.</Typography>;

  return (
    <Container>
      <CountryFilter />
      <CountriesTable />
    </Container>
  );
};
