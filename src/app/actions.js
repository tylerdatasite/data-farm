// Actions JS
import axios from 'axios';
import {
    BANYAN_CORE,
    CYPRESS_CORE,
    NEEM_CORE,
    WOLLEMI_CORE,
} from './core';
import banyan from '../data/central/Central_Banyan.json';
import cypress from '../data/central/Central_Cypress.json';
import neem from '../data/central/Central_Neem.json';
import wollemi from '../data/central/Central_Wollemi.json';

// Action Types
export const BANYAN_DATA = banyan;
export const CYPRESS_DATA = cypress;
export const NEEM_DATA = neem;
export const WOLLEMI_DATA = wollemi;

// Banyan Action
export const loadBanyanData = data => async dispatch => {
    dispatch({
        type: BANYAN_CORE.LOAD,
    });
    try {
        const response = await axios.get(BANYAN_DATA);
        console.log(response);
        dispatch({
            type: BANYAN_CORE.LOAD_SUCCESS,
            banyanData: response.data,
            isError: false,
        });
    } catch(error) {
        console.log(error.message)
    };
};

export const loadCypressData = data => async dispatch => {
    dispatch({
        type: CYPRESS_CORE.LOAD,
    });
    try {
        const response = await axios.get(CYPRESS_DATA);
        console.log(response);
        dispatch({
            type: CYPRESS_CORE.LOAD_SUCCESS,
            cypressData: response.data,
            isError: false,
        });
    } catch(error) {
        console.log(error.message)
    };
};

export const loadNeemData = data => async dispatch => {
    dispatch({
        type: NEEM_CORE.LOAD,
    });
    try {
        const response = await axios.get(NEEM_DATA);
        console.log(response);
        dispatch({
            type: NEEM_CORE.LOAD_SUCCESS,
            neemData: response.data,
            isError: false,
        });
    } catch(error) {
        console.log(error.message)
    };
};

export const loadWollemiData = data => async dispatch => {
    dispatch({
        type: WOLLEMI_CORE.LOAD,
    });
    try {
        const response = await axios.get(WOLLEMI_DATA);
        console.log(response);
        dispatch({
            type: WOLLEMI_CORE.LOAD_SUCCESS,
            wollemiData: response.data,
            isError: false,
        });
    } catch(error) {
        console.log(error.message)
    };
};