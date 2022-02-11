export const initialState={
    cart:[]
}

const cartItems=(state=initialState, action)=>{
    switch(action.type){
        case ('CART_ADD_ITEM'):
            return({
                ...state,
                cart:[...state.cart,action.payload]
            })
        case ('CART_REMOVE_ITEM'):
            return({
                ...state,
                cart:state.cart.filter((item)=>{return item.id!==action.payload})
            })
        default:
            return state
        
    }

}
export default cartItems