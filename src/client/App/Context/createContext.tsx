import React, {  useReducer } from 'react'

export default (reducer: any, actions: any, default_value: any) => {
    const Context = React.createContext(default_value)

    const Provider = ({ children }: any) => {
        const [state, dispatch] = useReducer(reducer, default_value)

        const boundActions: any = {}

        for (let i in actions) {
            boundActions[i] = actions[i](dispatch)
        }

        return (
            <Context.Provider value={{ state, ...boundActions }}>
                {children}
            </Context.Provider>
        )
    }

    return {Context, Provider}
}