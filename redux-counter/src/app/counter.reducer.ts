import {AppState} from './app.state';
import {INCREMENT, DECREMENT} from './counter.actions';
import {Action,Reducer} from 'redux';

const intialState: AppState = {counter: 0};

export const CounterReducer: Reducer<AppState> = 
    (state: AppState = intialState, action: Action):AppState =>{
        switch(action.type){
            case INCREMENT:
                return Object.assign({},state, {counter: state.counter + 1});
            case DECREMENT:
                return Object.assign({}, state, {counter: state.counter - 1});
            default: 
            return state;
        }
    }