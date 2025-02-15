import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '@/lib/store/store';

interface CompanyState {
  companyId: string | number | null;
}

const initialState: CompanyState = {
  companyId: null,
};

const companySlice = createSlice({
  name: 'company',
  initialState,
  reducers: {
    setCompanyId: (state, action: PayloadAction<string | number | null>) => {
      state.companyId = action.payload;
    },
    clearCompanyId: state => {
      state.companyId = null;
    },
  },
});

export const { setCompanyId, clearCompanyId } = companySlice.actions;

export const selectCompanyId = (state: RootState) => state.company.companyId;

export default companySlice.reducer;
