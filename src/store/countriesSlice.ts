import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface Country {
  code: string;
  name: string;
}

interface CountriesState {
  countries: Country[];
  filter: string;
}

const initialState: CountriesState = {
  countries: [],
  filter: '',
};

const countriesSlice = createSlice({
  name: 'countries',
  initialState,
  reducers: {
    setCountries(state, action: PayloadAction<Country[]>) {
      state.countries = action.payload;
    },
    setFilter(state, action: PayloadAction<string>) {
      console.log(action.payload);
      state.filter = action.payload;
    },
  },
});

export const { setCountries, setFilter } = countriesSlice.actions;
export default countriesSlice.reducer;
