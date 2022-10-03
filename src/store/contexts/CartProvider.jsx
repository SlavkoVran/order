import { useReducer, createContext } from 'react'
import reducer, { initState } from '../reducers/cartReducer'
import * as cartAction from '../actions/cartActions'
import axios from 'axios';

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
        dispatch(cartAction.resetOrder(orderItem))
    }



    const addQuantity = (id, quantity) => {

        let item = state.orderItem.map(item => {
            if (item.id === id) {
                return { ...item, quantity, itemPrice: (item.subtotal * quantity).toFixed(2) }
            } else {
                return item
            }
        })

        const total = item.reduce((accumulator, current) => accumulator + Number(current.itemPrice), 0)

        dispatch(cartAction.addQuantity(item, total))
    }

    const removeOrder = (orderId) => {
        dispatch(cartAction.removeOrder(orderId))
    }

    const sendSaveOrder = () => {

        let data = []
        // eslint-disable-next-line
        state.orderItem.map((item) => {
            data.push({
                bowlId: item.bowlId,
                sizeId: item.sizeId,
                baseId: item.baseId,
                sauceId: item.sauceId,
                ingredients: item.ingredient,
                extraIngredients: item.extras
            })
        })

        axios
            .post('https://fet.app.fsd.rs/api/create_order', data, {
                headers: {
                    "Content-Type": "application/json",
                    Authorization: `Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJpYXQiOjE2NjQ2MjQzMTQsImV4cCI6MTY2NTQ4ODMxNCwicm9sZXMiOlsiUk9MRV9VU0VSIl0sImVtYWlsIjoic2xhdmtvdi5tb2IxQGdtYWlsLmNvbSJ9.3Y9Ektn4UNwhx2lPvktVIcx9CZzshiCvmT2JtvNvfIf6YjQWAYsJxEqltfKSunNK4BlQmOxmD3imN0jIYaJZuNQopB-s4sANllggtqUFDRJnhsmoHlsDkGzmw5n9vm6co-7DwaqXY3oLFQRwf2W2rrrVh3wj4GoRM8Ii70jccjWBiQMtm6MdVUPXbIDfC6gpO6RnBGxWKQ8526a95dytwSPWw8I-7km75IcmjivIooEiUoEVpM5oeXD5-loihiCJ4A5X0iL1wEjnOH7JhTrQpwM9cBsd2F5noCPpAcTL-39AWU6w1MciFIfYNQZPKrMTzrbyXPrRo9uMxN6X0TEixg`
                },
            })
            .then((res) => {
                console.log(res)
            })
            .catch((err) => {
                console.log(err)
            })
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
                quantity: state.quantity,
                total: state.total?.toFixed(2),
                addBowl,
                addSize,
                addBase,
                addSauce,
                addIngredient,
                addExtraIngredient,
                resetOrder,
                removeOrder,
                addQuantity,
                sendSaveOrder,
            }}
        >
            {children}
        </CartContext.Provider>
    )
}

export default CartContextProvider