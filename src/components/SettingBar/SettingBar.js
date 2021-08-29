import {useEffect, useRef, useState} from "react";
import {useSelector} from "react-redux";
import "./setting-bar.scss"

function SettingBar() {
    const tool = useSelector(state => state.tool)
    const [lineWidthInputValue, setLineWidthInputValue] = useState("1")
    const ref = useRef()

    useEffect(() => {
        console.dir(ref.current)
    }, [lineWidthInputValue])

    function onLineWidthInputChange(event) {
        const value = event.target.value
        switch (value) {
            case value > 50: {
                setLineWidthInputValue("50")
                tool.lineWidth = 50
                break
            }

            case value < 1: {
                setLineWidthInputValue("1")
                tool.lineWidth = 1
                break
            }
            default: {
                setLineWidthInputValue(value)
                tool.lineWidth = value
            }

        }
    }

    return (
        <div className="setting-bar">
            <label htmlFor="line-width">Толщина линии</label>
            <input
                ref={ref}
                onChange={onLineWidthInputChange}
                id="line-width"
                type="number"
                min={1}
                max={50}
                value={lineWidthInputValue}
            />
            <label htmlFor="stroke-color">Цвет обводки</label>
            <input onChange={e => tool.strokeColor = e.target.value} id="stroke-color" type="color"/>
        </div>
    )
}

export default SettingBar