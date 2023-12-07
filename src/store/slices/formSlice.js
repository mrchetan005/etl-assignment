import { createSlice } from "@reduxjs/toolkit";
import { generateObject, validateEmail } from "../../utilityFunctions";
import { formTemplatesData } from "../../constants";

const initialState = {
    disabled: true,
    formsData: generateObject(formTemplatesData),
    errorsData: generateObject(formTemplatesData),
}

const formSlice = createSlice({
    name: 'form',
    initialState,
    reducers: {
        updateForm(state, action) {
            const { name, value, files, required, template } = action.payload;
            if (files) return;
            if (!value && required) {
                state.errorsData[template][name] = `This field is required`;
            } else if (name === 'email' && !validateEmail(value)) {
                state.errorsData[template][name] = `Please enter valid email`;
            } else {
                state.errorsData[template][name] = '';
            }
            state.formsData[template][name] = value;
        },
        updateFiles(state, action) {
            const { name, files, required, sizeLimit, template } = action.payload;
            if (files && required) {
                if (files[0] && (files[0].size <= sizeLimit)) {
                    state.formsData[template][name] = files[0];
                    state.errorsData[template][name] = '';
                } else {
                    state.errorsData[template][name] = 'File must be at most 1Mb';
                }
                return;
            }
        },
        resetForm() {
            return initialState;
        }
    }
});

export const { updateForm, updateFiles, resetForm } = formSlice.actions;

export default formSlice.reducer;