import { configureStore } from '@reduxjs/toolkit';
import linkListReducer from '../../entities/linkList/linkListSlice'

export const store = configureStore({
    reducer: {
        linkList: linkListReducer,
    },
});

// Типы для useSelector и useDispatch
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;