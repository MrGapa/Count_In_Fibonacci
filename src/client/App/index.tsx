import 'regenerator-runtime/runtime'
import React from "react"
import { Provider } from './Context/calculateFibonacci'
import { IndexView } from './Views/index'

import './styles.scss'


export const App = () => {
    return (
        <Provider>
            <IndexView />
        </Provider>
    )
    
}