
import {useDispatch, useSelector} from 'react-redux';
import { decrement, increment } from '../slices/counterSlice';

export const useCounter = () =>{
    const dispatch = useDispatch();
    const count = useSelector((state)=>state.counter.value);

    const incrementCounter = () =>{
        dispatch(increment());
    };

    const decrementCounter = () =>{
        dispatch(decrement());
    };
    return {
        count,
        incrementCounter,decrementCounter,
    };

};