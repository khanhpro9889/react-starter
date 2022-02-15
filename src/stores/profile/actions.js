import { ADD_PROFILE, REMOVE_PROFILE } from './actionTypes';

export const addProfile = (profile) => {
    return {
        type: ADD_PROFILE,
        payload: profile
    }
}

export const removeProfile = () => {
    return {
        type: REMOVE_PROFILE,
    }
}