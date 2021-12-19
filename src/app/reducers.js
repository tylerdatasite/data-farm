// Reducers JS
// import { combineReducers } from 'redux';

// Import Cores
import { BANYAN_CORE, CYPRESS_CORE, NEEM_CORE, WOLLEMI_CORE } from './core';

const initialState = {
    banyanData: [],
    cypressData: [],
    neemData: [],
    wollemiData: [],
    isLoading: false,
    isError: false,
};

const centralReducers = (state = initialState, action) => {
    switch(action.type) {
        case BANYAN_CORE.LOAD:
            return {
                ...state,
                isLoading: true,
                isError: false,
            };
        case BANYAN_CORE.LOAD_SUCCESS:
            return {
                ...state,
                isLoading: false,
                isError: false,
                banyanData: action.banyanData,
            };
        case CYPRESS_CORE.LOAD:
            return {
                ...state,
                isLoading: true,
                isError: false,
            };
        case CYPRESS_CORE.LOAD_SUCCESS:
            return {
                ...state,
                isLoading: false,
                isError: false,
                cypressData: action.cypressData,
            };
        case NEEM_CORE.LOAD:
            return {
                ...state,
                isLoading: true,
                isError: false,
            };
        case NEEM_CORE.LOAD_SUCCESS:
            return {
                ...state,
                isLoading: false,
                isError: false,
                neemData: action.neemData,
            };
        case WOLLEMI_CORE.LOAD:
            return {
                ...state,
                isLoading: true,
                isError: false,
            };
        case WOLLEMI_CORE.LOAD_SUCCESS:
            return {
                ...state,
                isLoading: false,
                isError: false,
                wollemiData: action.wollemiData,
            };
        default:
            return state;
    };
};

export default centralReducers;

// export const banyan_reducer = (state = initialState.banyanData, action) => {
//     switch (action.type) {
//         case BANYAN_CORE.LOAD:
//             return {
//                 ...state,
//                 isLoading: true,
//                 isError: false,
//             };
//         case BANYAN_CORE.LOAD_SUCCESS:
//             return {
//                 ...state,
//                 isLoading: false,
//                 isError: false,
//                 banyanData: action.banyanData,
//             };
//         default:
//             return state;
//     };
// };

// export const cypress_reducer = (state = initialState.cypressData, action) => {
//     switch (action.type) {
//         case CYPRESS_CORE.LOAD:
//             return {
//                 ...state,
//                 isLoading: true,
//                 isError: false,
//             };
//         case CYPRESS_CORE.LOAD_SUCCESS:
//             return {
//                 ...state,
//                 isLoading: false,
//                 isError: false,
//                 cypressData: action.cypressData,
//             };
//         default:
//             return state;
//     };
// };

// export const neem_reducer = (state = initialState.neemData, action) => {
//     switch (action.type) {
//         case NEEM_CORE.LOAD:
//             return {
//                 ...state,
//                 isLoading: true,
//                 isError: false,
//             };
//         case NEEM_CORE.LOAD_SUCCESS:
//             return {
//                 ...state,
//                 isLoading: false,
//                 isError: false,
//                 neemData: action.neemData,
//             };
//         default:
//             return state;
//     };
// };

// export const wollemi_reducer = (state = initialState.wollemiData, action) => {
//     switch (action.type) {
//         case WOLLEMI_CORE.LOAD:
//             return {
//                 ...state,
//                 isLoading: true,
//                 isError: false,
//             };
//         case WOLLEMI_CORE.LOAD_SUCCESS:
//             return {
//                 ...state,
//                 isLoading: false,
//                 isError: false,
//                 wollemiData: action.wollemiData,
//             };
//         default:
//             return state;
//     };
// };

// const centralReducers = {
//     banyan_reducer,
//     cypress_reducer,
//     neem_reducer,
//     wollemi_reducer,
// };

// export default centralReducers;