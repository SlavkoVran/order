import * as actionsTypes from './actionsTypes'
//BOWL

export const addBowlAction = (bowl) => {
    return {
        type: actionsTypes.ADD_BOWL,
        bowl: bowl,
    }
}

export const addSizeAction = (size) => {
    return {
        type: actionsTypes.ADD_SIZE,
        size: size,
        price: size.price
    }
}

export const addBaseAction = (base) => {
    return {
        type: actionsTypes.ADD_BASE,
        base: base,
    }
}

export const addSauceAction = (sauce) => {
    return {
        type: actionsTypes.ADD_SAUCE,
        sauce: sauce,
    }
}

export const addIngredientAction = (ingredient) => {
    return {
        type: actionsTypes.ADD_INGREDIENT,
        ingredient: ingredient,
    }
}

export const removeIngredientAction = (ingredient) => {
    return {
        type: actionsTypes.REMOVE_INGREDIENT,
        ingredient: ingredient,
    }
}

export const addExtraIngredientAction = (extraIngredient) => {
    return {
        type: actionsTypes.ADD_EXTRA_INGREDIENT,
        extraIngredient: extraIngredient,
        price: extraIngredient.price,
    }
}

export const removeExtraIngredientAction = (extraIngredient) => {
    return {
        type: actionsTypes.REMOVE_EXTRA_INGREDIENT,
        extraIngredient: extraIngredient,
        price: extraIngredient.price
    }
}

export const resetOrder = (orderItem) => {
    return {
        type: actionsTypes.RESET_ORDER,
        orderItem: orderItem,
        bowl: '',
        size: '',
        base: '',
        sauce: '',
        ingredient: [],
        extraIngredient: [],
        subtotal: null
    }
}

export const removeOrder = (orderId) => {
    return {
        type: actionsTypes.REMOVE_ORDER,
        orderId: orderId
    }
}

export const addQuantity = (item, total) => {
    return {
        type: actionsTypes.ADD_QUANTITY,
        item: item,
        total: total
    }
}

export const saveOrder = (order) => {
    return {
        type: actionsTypes.SAVE_ORDER,
        order: order
    }
}