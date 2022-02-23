import React from "react"

const calc = (cb: any) => {
    let val: HTMLInputElement = document.querySelector(".numberInput")!

    if (val.value === '') {
        val.value = '0'
    }

    cb(val.value)
}   

export const Calculator = (props: any) => {

    return (
        <div className="row">
            <div className="col" >
                <input
                    type="number"
                    className="numberInput"
                    defaultValue={0}
                    onKeyPress={(eve) => {
                        if (eve.key === 'Enter') {
                            calc(props.onClick)
                        }
                    }}
                    onKeyDown={(eve) => {
                        if (eve.key === 'ArrowUp' || eve.key === 'ArrowDown') {
                            calc(props.onClick)
                        }
                    }}
                />
            </div>
            <div className="col">
                <input type="button" value="Calculate" onClick={() => calc(props.onClick)}/>
            </div>
        </div>
    )
}