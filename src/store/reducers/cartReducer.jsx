import * as actionTypes from '../actions/actionsTypes'


const initState = {
    bowl: null,
    size: null,
    base: null,
    sauce: null,
    ingredient: [],
    extraIngredient: [],
    subtotal: null,
    quantity: 1,
    cartCounter: null,
    orderItem: [],
    total: null
}

const addBowl = (state, action) => {
    return {
        ...state,
        bowl: action.bowl,
    }
}

const addSize = (state, action) => {
    return {
        ...state,
        size: action.size,
        subtotal: state.subtotal + action.price
    }
}

const addBase = (state, action) => {
    return {
        ...state,
        base: action.base
    }
}

const addSauce = (state, action) => {
    return {
        ...state,
        sauce: action.sauce
    }
}

const addIngredient = (state, action) => {
    return {
        ...state,
        ingredient: [...state.ingredient, action.ingredient],
    }
}

const removeIngredient = (state, action) => {
    return {
        ...state,
        ingredient: state.ingredient.filter(item => item !== action.ingredient)
    }
}

const addExtraIngredient = (state, action) => {
    return {
        ...state,
        extraIngredient: [...state.extraIngredient, action.extraIngredient],
        subtotal: state.subtotal + action.price
    }
}

const removeExtraIngredient = (state, action) => {
    return {
        ...state,
        extraIngredient: state.extraIngredient.filter(item => item.id !== action.extraIngredient.id),
        subtotal: state.subtotal - action.price
    }
}

const resetOrder = (state, action) => {
    return {
        ...state,
        orderItem: [...state.orderItem, action.orderItem],
        bowl: action.bowl,
        size: action.size,
        base: action.base,
        sauce: action.sauce,
        ingredient: action.ingredient,
        extraIngredient: action.extraIngredient,
        subtotal: action.subtotal,
    }
}

const removeOrder = (state, action) => {
    return {
        ...state,
        orderItem: state.orderItem.filter(item => item.id !== action.orderId)
    }
}

const addQuantiyty = (state, action) => {
    return {
        ...state,
        orderItem: action.item,
        total: action.total,
    }
}

const saveOrder = (state, action) => {
    return {
        ...state,
        order: action.order
    }
}

const reducer = (state, action) => {
    switch (action.type) {
        case actionTypes.ADD_BOWL:
            return addBowl(state, action)
        case actionTypes.ADD_SIZE:
            return addSize(state, action)
        case actionTypes.ADD_BASE:
            return addBase(state, action)
        case actionTypes.ADD_SAUCE:
            return addSauce(state, action)
        case actionTypes.ADD_INGREDIENT:
            return addIngredient(state, action)
        case actionTypes.REMOVE_INGREDIENT:
            return removeIngredient(state, action)
        case actionTypes.ADD_EXTRA_INGREDIENT:
            return addExtraIngredient(state, action)
        case actionTypes.REMOVE_EXTRA_INGREDIENT:
            return removeExtraIngredient(state, action)
        case actionTypes.RESET_ORDER:
            return resetOrder(state, action)
        case actionTypes.REMOVE_ORDER:
            return removeOrder(state, action)
        case actionTypes.ADD_QUANTITY:
            return addQuantiyty(state, action)
        case actionTypes.SAVE_ORDER:
            return saveOrder(state, action)
        default:
            return state
    }
}

export { initState }
export default reducer