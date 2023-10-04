import axios from "axios";

// Action TYPE
export const FETCH_WORD_REQUEST ='FETCH_WORD_REQUEST';
export const FETCH_WORD_SUSSESS ='FETCH_WORD_SUCCESS';
export const FETCH_WORD_FAILURE ='FETCH_WORD_FAILURE';

// Achtion Creators
export const fetchWordRequest = () => ({
    type: FETCH_WORD_REQUEST,
});
export const fetchWordSuccess = (wordData) => ({
    type: FETCH_WORD_SUSSESS,
});
export const fetchWordfailure = (error) => ({
    type: FETCH_WORD_FAILURE,
});

// Async Action Creator for fetching word data
export const fetchWordData = (word) => {
    return (dispatch) => {
        dispatch(fetchWordRequest());
        axios.get(`https://api.dictionaryapi.dev/api/v2/entries/en/${word}`)
        .then((Response) => {
            const wordData = Response.data;
            dispatch(fetchWordSuccess(wordData));
        })
        .catch((error) => {
            dispatch(fetchWordfailure(error.message))
        });
    }
};