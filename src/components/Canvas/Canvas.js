import "./canvas.scss"
import {useEffect, useRef} from "react";
import {setCanvas, setRedoList, setTool, setUndoList} from "../../store/actions";
import {useDispatch, useSelector} from "react-redux";
import Brush from "../../tools/Brush";

function Canvas() {
    const canvasRef = useRef()
    const dispatch = useDispatch()
    const undoList = useSelector(state => state.undoList)

    useEffect(() => {
        dispatch(setCanvas(canvasRef.current))
        dispatch(setTool(new Brush(canvasRef.current)))
    }, [])

    const mouseDownHandler = () => {
        const list = [...undoList]
        list.push(canvasRef.current.toDataURL())
        dispatch(setUndoList(list))
        dispatch(setRedoList([]))
    }

    return (
        <div className="canvas">
            <canvas onMouseDown={mouseDownHandler} ref={canvasRef} width={900} height={600}/>
        </div>
    )
}

export default Canvas