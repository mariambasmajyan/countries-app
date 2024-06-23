import { ChangeEvent } from 'react';
import { useDispatch } from 'react-redux';
import { TextInput } from '../TextInput/TextInput';
import { setFilter } from 'src/store/countriesSlice';

export const CountryFilter = () => {
  const dispatch = useDispatch();

  const handleFilterChange = (event: ChangeEvent<HTMLInputElement>) => {
    dispatch(setFilter(event.target.value));
  };

  return <TextInput label="Filter by country code" onChange={handleFilterChange} />;
};
