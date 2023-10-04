// import { AddToHistory, clearHistory } from "../actions/HistoryActions";

const initialState = {
    searchHistory:[],
};

const HistoryReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'ADD_TO_HISTORY':
            const updatedHistory = [...state.searchHistory];
            if(!updatedHistory.includes(action.payload)){
                updatedHistory.push(action.payload);
            }
            return {
                ...state,
                searchHistory: updatedHistory,
            };

            case 'CLEAR_HISTORY':
                return {
                    ...state,
                    searchHistory: [],
                };
                default:
                    return state;
    }
};

export default HistoryReducer;



// src/store/reducers/historyReducer.js
// const initialState = {
//     searchHistory: [],
//   };
  
//   const HistoryReducer = (state = initialState, action) => {
//     switch (action.type) {
//       case 'ADD_TO_HISTORY':
//         return {
//           ...state,
//           searchHistory: [...state.searchHistory, action.payload],
//         };
//       case 'CLEAR_HISTORY':
//         return {
//           ...state,
//           searchHistory: [],
//         };
//       default:
//         return state;
//     }
//   };
  
//   export default HistoryReducer;
  