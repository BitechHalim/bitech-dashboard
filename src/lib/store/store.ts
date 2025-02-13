import { configureStore } from '@reduxjs/toolkit';
import companyReducer from '@/services/company-service/store/companySlice';
import clientReducer from '@/services/client-management/store/clientSlice';

export const makeStore = () => {
  return configureStore({
    reducer: {
      company: companyReducer,
      client: clientReducer,
    },
  });
};

// Infer the type of makeStore
export type AppStore = ReturnType<typeof makeStore>;
// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<AppStore['getState']>;
export type AppDispatch = AppStore['dispatch'];
