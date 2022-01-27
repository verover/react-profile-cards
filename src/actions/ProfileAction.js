// this file will store api call.
import {dispatchSuccess,dispatchError,dispatchLoading} from '../config/dispatch';
import { API_URL, API_TIMEOUT } from '../config/constant';
import axios from 'axios';
import { addProfiles } from '../features/profile/profileSlice';

export const GET_LIST_PROFILES = "GET_LIST_PROFILES"

export const getUserProfile = () => {
    return(dispatch, getState) => {
        dispatch(addProfiles(dispatchLoading(dispatch, "GET_LIST_PROFILES")))
        axios({
            method:'GET',
            url:API_URL,
            params: {results:8, noinfo:''},
            timeout: API_TIMEOUT
        }).then(response => {
            return dispatch(addProfiles(dispatchSuccess(response.data.results)))
        }).catch(e => {
            console.log('tooslow!');
            return dispatchError(e.error || "NOT_FOUND")
        });
    }
}

