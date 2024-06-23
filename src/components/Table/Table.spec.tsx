import { Table } from './Table';
import { Country } from '../CountriesTable/CountriesTable';
import { render, screen, fireEvent } from '@testing-library/react';

const columns: { id: keyof Country; label: string }[] = [
  { id: 'name', label: 'Country Name' },
  { id: 'code', label: 'Country Code' },
];

const rows: Country[] = [
  { name: 'Estonia', code: 'EE' },
  { name: 'Canada', code: 'CA' },
  { name: 'Mexico', code: 'MX' },
  { name: 'Armenia', code: 'AM' },
  { name: 'France', code: 'FR' },
  { name: 'Germany', code: 'DE' },
  { name: 'Spain', code: 'ES' },
  { name: 'Italy', code: 'IT' },
  { name: 'Belgium', code: 'BE' },
  { name: 'Japan', code: 'JP' },
  { name: 'China', code: 'CN' },
];

describe('Table', () => {
  it('renders "No data available" when there are no rows', () => {
    render(<Table<Country> columns={columns} rows={[]} rowsPerPage={5} filter="" />);

    expect(screen.getByText('No data available')).toBeInTheDocument();
  });

  it('renders table with given columns and rows', () => {
    render(<Table<Country> columns={columns} rows={rows} filter="" />);

    expect(screen.getByText('Country Name')).toBeInTheDocument();
    expect(screen.getByText('Country Code')).toBeInTheDocument();
    expect(screen.getByText('Estonia')).toBeInTheDocument();
    expect(screen.getByText('Belgium')).toBeInTheDocument();
  });

  it('renders pagination controls', () => {
    render(<Table<Country> columns={columns} rows={rows} rowsPerPage={5} filter="" />);

    expect(screen.getByLabelText('Go to next page')).toBeInTheDocument();
  });

  it('paginates rows correctly', () => {
    render(<Table<Country> columns={columns} rows={rows} rowsPerPage={5} filter="" />);

    expect(screen.getByText('Estonia')).toBeInTheDocument();
    expect(screen.getByText('Canada')).toBeInTheDocument();
    expect(screen.queryByText('Belgium')).not.toBeInTheDocument();

    fireEvent.click(screen.getByLabelText('Go to next page'));

    expect(screen.getByText('Belgium')).toBeInTheDocument();
    expect(screen.queryByText('Canada')).not.toBeInTheDocument();
  });
});
