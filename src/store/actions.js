import * as constants from "./constants";

export function setTool(tool) {
    return {
        type: constants.SET_TOOL,
        tool
    }
}

export function setCanvas(canvas) {
    return {
        type: constants.SET_CANVAS,
        canvas
    }
}

export function setRedoList(list) {
    return {
        type: constants.SET_REDO_LIST,
        list
    }
}

export function setUndoList(list) {
    return {
        type: constants.SET_UNDO_LIST,
        list
    }
}

