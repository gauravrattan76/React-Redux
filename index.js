//Action iS a plain javsacripot object with type property and we use const to m ake sure that there are no type rrrors

const BUY_CAKE = 'Buy_Cake'


//Action Creator is a function whos task is to return a action

function buyCake(){
    return {
        type:BUY_CAKE,
        info:'First Action created!!'
    }
}

//application state needs to be  a single object

const initialState = {
    numOfCakes:10
}

const reducer = (state= initialState,action) => {
    switch(action.type){
        case BUY_CAKE : return {
            ...state,
            numOfCakes : state.numOfCakes -1
        }
        default: return state
    }

}