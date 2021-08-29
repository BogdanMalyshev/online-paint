import "./toolbar.scss"
import {useDispatch, useSelector} from "react-redux";
import {setRedoList, setTool, setUndoList} from "../../store/actions";
import Brush from "../../tools/Brush";
import Rect from "../../tools/Rect";
import Circle from "../../tools/Circle";
import Line from "../../tools/Line";
import Eraser from "../../tools/Eraser";

function Toolbar() {
    const dispatch = useDispatch()
    const canvas = useSelector(state => state.canvas)
    const tool = useSelector(state => state.tool)
    const undoList = useSelector(state => state.undoList)
    const redoList = useSelector(state => state.redoList)



    const onBrushClick = () => dispatch(setTool(new Brush(canvas)))
    const onRectClick = () => dispatch(setTool(new Rect(canvas)))
    const onCircleClick = () => dispatch(setTool(new Circle(canvas)))
    const onLineClick = () => dispatch(setTool(new Line(canvas)))
    const onEraserClick = () => dispatch(setTool(new Eraser(canvas)))

    function onColorInputChange(event) {
        tool.fillColor = event.target.value
    }

    function repaintCanvas(dataUrl, ctx) {
        let img = new Image()
        img.src = dataUrl
        img.onload =  () => {
            ctx.clearRect(0,0, canvas.width, canvas.height)
            ctx.drawImage(img, 0, 0, canvas.width, canvas.height)
        }
    }

    function undo() {
        let ctx = canvas.getContext('2d')
        const list = [...undoList]
        if (list.length > 0) {
            let dataUrl = list.pop()
            dispatch(setUndoList(list))
            const newRedoList = [...redoList, canvas.toDataURL()]
            dispatch(setRedoList(newRedoList))
            repaintCanvas(dataUrl, ctx)
        } else {
            ctx.clearRect(0, 0, canvas.width, canvas.heigth)
        }
    }

    function redo() {
        let ctx = canvas.getContext('2d')
        const list = [...redoList]
        if (list.length > 0) {
            let dataUrl = list.pop()
            dispatch(setRedoList(list))
            dispatch(setUndoList([...undoList, canvas.toDataURL()]))
            repaintCanvas(dataUrl, ctx)
        }
    }

    const download = () => {
        const dataUrl = canvas.toDataURL()
        const a = document.createElement('a')
        a.href = dataUrl
        a.download = "image.jpg"
        document.body.appendChild(a)
        a.click()
        document.body.removeChild(a)
    }

    return (
        <div className="toolbar">
            <button className="toolbar__btn brush" onClick={onBrushClick}/>
            <button className="toolbar__btn rect" onClick={onRectClick}/>
            <button className="toolbar__btn circle" onClick={onCircleClick}/>
            <button className="toolbar__btn eraser" onClick={onEraserClick}/>
            <button className="toolbar__btn line" onClick={onLineClick}/>
            <input type="color" onChange={onColorInputChange} className="change-color"/>
            <button className="toolbar__btn undo" onClick={undo}/>
            <button className="toolbar__btn redo" onClick={redo}/>
            <button className="toolbar__btn save" onClick={download}/>
        </div>
    )
}

export default Toolbar