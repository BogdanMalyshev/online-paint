import initialState from "./initialState";
import * as constants from "./constants";

export const applicationReducer = (state = initialState, action) => {
    switch (action.type) {

        case constants.SET_TOOL: {
            return {
                ...state, tool: action.tool
            }
        }

        case constants.SET_CANVAS: {
            return {
                ...state, canvas: action.canvas
            }
        }

        case constants.SET_UNDO_LIST: {
            return {
                ...state, undoList: action.list
            }
        }

        case constants.SET_REDO_LIST: {
            return {
                ...state, redoList: action.list
            }
        }

        default:
            return state
    }
};

