import { SET_INPUT_FOCUS } from "./constants";

const initialState = {
    focus: false,
};

export default function searchFormReducer(state = initialState, action) {
    switch (action.type) {
        case SET_INPUT_FOCUS:
            return {
                ...state,
                focus: action.payload,
            };
        default:
            return state;
    }
}
