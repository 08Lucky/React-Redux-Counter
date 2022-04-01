import { INCREASE_COUNTER, DECREASE_COUNTER } from "./counter.actionTypes";

export const COUNTER_KEY   = 'counterStore'

let initialState ={
    counter : 0
}

const counterReducer = (state = initialState, action) => {

    let {type, payload} = action

    switch(type){
        case INCREASE_COUNTER:
            return{
                counter: state.counter + 1
            }

        case DECREASE_COUNTER:
                return{
                    counter: (state.counter - 1 > 0)? state.counter - 1 : 1
                }
        default: return state
    }

}

export {counterReducer};
