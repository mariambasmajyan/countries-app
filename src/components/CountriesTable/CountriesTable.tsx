import { Table } from '../Table/Table';
import { useSelector } from 'react-redux';
import { RootState } from 'src/store/store';

export type Country = {
  code: string;
  name: string;
};

export const CountriesTable = () => {
  const countries = useSelector((state: RootState) => state.countries.countries);
  const filter = useSelector((state: RootState) => state.countries.filter);

  const filteredCountries = countries.filter((country) =>
    country.code.toLowerCase().includes(filter.toLowerCase()),
  );

  const columns: { id: keyof Country; label: string }[] = [
    { id: 'name', label: 'Country Name' },
    { id: 'code', label: 'Country Code' },
  ];

  return (
    <Table<Country> columns={columns} rows={filteredCountries} rowsPerPage={10} filter={filter} />
  );
};
