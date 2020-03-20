const redux = require('redux');
const createStore = redux.createStore;

//Action iS a plain javsacripot object with type property and we use const to m ake sure that there are no type rrrors

const BUY_CAKE = 'Buy_Cake';
const BUY_ICECREAM ='Buy_IceCream';


//Action Creator is a function whos task is to return a action

function buyCake(){
    return {
        type:BUY_CAKE,
        info:'First Action created!!'
    }
}

function buyIceCream(){
    return{
        type:BUY_ICECREAM
    }
}

//application state needs to be  a single object

const initialState = {
    numOfCakes:10,
    numOfIceCream:7
}

//reducer is a function that takes the current state and action and return the new state
const reducer = (state= initialState,action) => {
    switch(action.type){
        case BUY_CAKE : return {
            ...state,
            numOfCakes : state.numOfCakes -1
        }
        case BUY_ICECREAM : return {
            ...state,
            numOfIceCream : state.numOfIceCream -1
        }
        default: return state
    }

}
//Creating a store using redux library create store method and pasing the initialk state using reducer
const store = createStore(reducer);
//store.getstate method to get the current state
console.log('initial state',store.getState());
//subscribing to the store
const unsubscribe = store.subscribe(() => console.log('new state',store.getState()));
//dispatching the actions using action creator
store.dispatch(buyCake());
store.dispatch(buyCake());
store.dispatch(buyCake());
store.dispatch(buyIceCream());
store.dispatch(buyIceCream());
store.dispatch(buyIceCream());
unsubscribe();