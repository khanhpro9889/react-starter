import  {ADD_PROFILE, REMOVE_PROFILE} from './actionTypes';

const initialState = {
    
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_PROFILE:
            return {
                ...action.payload
            }
        case REMOVE_PROFILE:
            return {

            }
        default:
            return state;
    }
}

export default reducer;