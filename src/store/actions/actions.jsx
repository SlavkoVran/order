import * as actionsTypes from './actionsTypes'

//BOWL
export const getBowlsStart = () => {
    return {
        type: actionsTypes.GET_BOWLS_START
    }
}

export const getBowlsSuccess = (bowls) => {
    return {
        type: actionsTypes.GET_BOWLS_SUCCESS,
        bowls: bowls
    }
}

export const getBowlsFail = (error) => {
    return {
        type: actionsTypes.GET_BOWLS_FAIL,
        error: error
    }
}

// SIZES
export const getSizesStart = () => {
    return {
        type: actionsTypes.GET_SIZES_START
    }
}

export const getSizesSuccess = (sizes) => {
    return {
        type: actionsTypes.GET_SIZES_SUCCESS,
        sizes: sizes
    }
}

export const getSizesFail = (error) => {
    return {
        type: actionsTypes.GET_SIZES_FAIL,
        error: error
    }
}

// BASES
export const getBasesStart = () => {
    return {
        type: actionsTypes.GET_BASES_START
    }
}

export const getBasesSuccess = (bases) => {
    return {
        type: actionsTypes.GET_BASES_SUCCESS,
        bases: bases
    }
}

export const getBasesFail = (error) => {
    return {
        type: actionsTypes.GET_BASES_FAIL,
        error: error
    }
}

// INGREDIENTS
export const getIngredietsStart = () => {
    return {
        type: actionsTypes.GET_INGREDIENTS_START
    }
}

export const getIngredietsSuccess = (ingredients) => {
    return {
        type: actionsTypes.GET_INGREDIENTS_SUCCESS,
        ingredients: ingredients
    }
}

export const getIngredietsFail = (error) => {
    return {
        type: actionsTypes.GET_INGREDIENTS_FAIL,
        error: error
    }
}

// SAUCES
export const getSaucesStart = () => {
    return {
        type: actionsTypes.GET_SAUCES_START
    }
}

export const getSaucesSuccess = (sauces) => {
    return {
        type: actionsTypes.GET_SAUCES_SUCCESS,
        sauces: sauces
    }
}

export const getSaucesFail = (error) => {
    return {
        type: actionsTypes.GET_SAUCES_FAIL,
        error: error
    }
}

// EXTRA INGREDIENTS
export const getExtraIngredientsStart = () => {
    return {
        type: actionsTypes.GET_EXTRA_INGREDIENTS_START
    }
}

export const getExtraIngredientsSuccess = (extraIngredients) => {
    return {
        type: actionsTypes.GET_EXTRA_INGREDIENTS_SUCCESS,
        extraIngredients: extraIngredients
    }
}

export const getExtraIngredientsFail = (error) => {
    return {
        type: actionsTypes.GET_EXTRA_INGREDIENTS_FAIL,
        error: error
    }
}

// Steps

export const nextStepAction = (activeStep) => {
    return {
        type: actionsTypes.NEXT_STEP,
        step: activeStep
    }
}

export const backStepAction = (activeStep) => {
    return {
        type: actionsTypes.NEXT_STEP,
        step: activeStep
    }
}