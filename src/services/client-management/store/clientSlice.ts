import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '@/lib/store/store';

interface ClientState {
  clientId: string | number | null;
}

const initialState: ClientState = {
  clientId: null,
};

const clientSlice = createSlice({
  name: 'client',
  initialState,
  reducers: {
    setClientId: (state, action: PayloadAction<string | number | null>) => {
      state.clientId = action.payload;
    },
    clearClientId: state => {
      state.clientId = null;
    },
  },
});

export const { setClientId, clearClientId } = clientSlice.actions;

export const selectClientId = (state: RootState) => state.client.clientId;

export default clientSlice.reducer;
