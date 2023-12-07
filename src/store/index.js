import { configureStore } from "@reduxjs/toolkit";
import formReducer from "./slices/formSlice";

const store = configureStore({
    reducer: {
        form: formReducer
    },
    middleware: getDefaultMiddleware =>
        getDefaultMiddleware({
            serializableCheck: false,
        }),
});

export default store;