import createContext from "./createContext"
import { instance } from '../Api/Api'

const calculateReducer = (state: any, action: any) => {
    switch (action.type) {
        case 'calc': 
            return {
                ...state,
                answer: action.payload
            }
        
        default:
            return state
    }
}

const calculate = (dispatch: any) => async (number: number) => {

    let res = await instance.get(`/${number}`)

    if (res.status == 200) {
        dispatch({type: 'calc', payload: res.data.answer})
    }
}

const initalState = {
    answer: 0
}

export const { Context, Provider } = createContext(
    calculateReducer,
    { calculate },
    initalState
)