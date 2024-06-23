import countriesSlice, { setCountries, setFilter } from './countriesSlice';

describe('countriesSlice', () => {
  it('should add countries', () => {
    const initialState = { countries: [], filter: '' };
    const newCountries = [
      { code: 'EE', name: 'Estonia' },
      { code: 'BE', name: 'Belgium' },
    ];

    expect(countriesSlice(initialState, setCountries(newCountries))).toEqual({
      countries: newCountries,
      filter: '',
    });
  });

  it('should update filters', () => {
    const initialState = { countries: [], filter: '' };
    const newFilter = 'BE';

    expect(countriesSlice(initialState, setFilter(newFilter))).toEqual({
      countries: [],
      filter: newFilter,
    });
  });

  it('should create an action to add countries', () => {
    const payload = [
      { code: 'EE', name: 'Estonia' },
      { code: 'BE', name: 'Belgium' },
    ];
    const expectedAction = {
      type: setCountries.type,
      payload,
    };

    expect(setCountries(payload)).toEqual(expectedAction);
  });

  it('should create an action to update filter', () => {
    const payload = 'EE';
    const expectedAction = {
      type: setFilter.type,
      payload,
    };

    expect(setFilter(payload)).toEqual(expectedAction);
  });
});
