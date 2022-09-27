import { useReducer, createContext } from 'react'
import reducer, { initState } from '../reducers/cartReducer'
import * as cartAction from '../actions/cartActions'

export const CartContext = createContext();

const CartContextProvider = ({ children }) => {
    const [state, dispatch] = useReducer(reducer, initState)

    const addBowl = (bowl) => {
        dispatch(cartAction.addBowlAction(bowl))
    }
    const addSize = (size) => {
        dispatch(cartAction.addSizeAction(size))
    }
    const addBase = (base) => {
        dispatch(cartAction.addBaseAction(base))
    }
    const addSauce = (sauce) => {
        dispatch(cartAction.addSauceAction(sauce))
    }

    const addIngredient = (e) => {
        const { value, checked } = e.target
        if (checked) {
            dispatch(cartAction.addIngredientAction(value))
        } else {
            dispatch(cartAction.removeIngredientAction(value))
        }
    }

    const addExtraIngredient = (extraIngredient) => {
       
        let isInCart = state.extraIngredient?.some(item => item.id === extraIngredient.id)
        if (isInCart) {
            dispatch(cartAction.removeExtraIngredientAction(extraIngredient))
        } else {
            dispatch(cartAction.addExtraIngredientAction(extraIngredient))
        }      
    }

    const resetOrder = (orderItem) => {
        console.log(orderItem)
        dispatch(cartAction.resetOrder(orderItem))
    }

    return (
        <CartContext.Provider
            value={{
                bowlCart: state.bowl,
                sizeCart: state.size,
                baseCart: state.base,
                sauceCart: state.sauce,
                ingredientCart: state.ingredient,
                extraIngredientCart: state.extraIngredient,
                subtotal: state.subtotal ? (state.subtotal).toFixed(2) : state.subtotal,
                orderItem: state.orderItem,
                addBowl,
                addSize,
                addBase,
                addSauce,
                addIngredient,
                addExtraIngredient,
                resetOrder,
            }}
        >
            {children}
        </CartContext.Provider>
    )
}

export default CartContextProvider