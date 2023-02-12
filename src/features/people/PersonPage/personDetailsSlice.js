import { createSlice } from "@reduxjs/toolkit";

const personDetailsSlice = createSlice({
    name: "personDetails",
    initialState: {
        status: "loading",
        personDetails: [],
        personId: null,
        personCredits: [],
    },
    reducers: {
        fetchPersonDetails: (state) => {
            state.personDetails = [];
            state.status = "loading";
        },
        fetchPersonDetailsSuccess: (state, { payload: personDetails }) => {
            state.status = "success";
            state.personDetails = personDetails;
        },
        setPersonId: (state, { payload: id }) => {
            state.personId = id;
        },
        fetchPersonCredits: (state) => {
            state.status = "loading";
        },
        fetchPersonCreditsSuccess: (state, { payload: personCredits }) => {
            state.status = "success";
            state.personCredits = personCredits;
        },
        fetchError: (state) => {
            state.status = "error";
        },
    },
});

export const {
    fetchPersonDetails,
    fetchPersonDetailsSuccess,
    setPersonId,
    fetchPersonCredits,
    fetchPersonCreditsSuccess,
    fetchError,
} = personDetailsSlice.actions;


const selectPersonDetailsState = (state) => state.personDetails;

export const selectPersonDetails = (state) => selectPersonDetailsState(state).personDetails;
export const selectPersonStatus = (state) => selectPersonDetailsState(state).status;
export const selectPersonId = (state) => selectPersonDetailsState(state).personId;
export const selectPersonCredits = (state) => selectPersonDetailsState(state).personCredits;

export default personDetailsSlice.reducer;