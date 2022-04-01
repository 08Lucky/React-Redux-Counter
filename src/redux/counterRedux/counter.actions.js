import { INCREASE_COUNTER, DECREASE_COUNTER} from "./counter.actionTypes";

let increaseCounter = () => {
    return{
        type: INCREASE_COUNTER,
        payload: 'Increase'
    }
}

let decreaseCounter = () => {
    return{
        type: DECREASE_COUNTER,
        payload: 'Decrease'
    }
}

export {increaseCounter, decreaseCounter};
