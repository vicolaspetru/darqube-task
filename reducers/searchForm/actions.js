import { SET_INPUT_FOCUS } from "./constants";

export function setInputFocus(focus) {
    return {
        type: SET_INPUT_FOCUS,
        payload: focus,
    };
}
