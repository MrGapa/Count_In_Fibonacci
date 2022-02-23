import React, { useContext } from "react"

import { Calculator } from '../Components/Calculator'
import { Context } from '../Context/calculateFibonacci'

export const IndexView = () => {
    const { state, calculate } = useContext(Context)

    return (
        <div>
            <h1>Calculate Fibonacci</h1>

            <Calculator onClick={calculate}/>

            <div className="row">
                <div className="col">
                    <p>Fibonacci Result:</p>
                </div>
                <div className="col">
                    <h2>
                        {state.answer}
                    </h2>
                </div>
            </div>
        </div>
    )
}