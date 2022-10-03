import * as actionTypes from '../actions/actionsTypes'

const initState = {
    bowls: [],
    sizes: [],
    sauces: [],
    bases: [],
    ingredients: [],
    extraIngredients: [],
    loading: false,
    error: '',
    step: 1,
}

const getBowlsStart = (state, action) => {
    return {
        ...state,
        loading: true
    }
}

const getBowlsSuccess = (state, action) => {
    return {
        ...state,
        bowls: action.bowls.data.data
    }
}

const getBowlsFail = (state, action) => {
    return {
        ...state,
        error: action.error
    }
}

//SIZES

const getSizesStart = (state, action) => {
    return {
        ...state,
        loading: true
    }
}

const getSizesSuccess = (state, action) => {
    return {
        ...state,
        sizes: action.sizes.data.data
    }
}

const getSizesFail = (state, action) => {
    return {
        ...state,
        error: action.error
    }
}

//BASES

const getBasesStart = (state, action) => {
    return {
        ...state,
        loading: true
    }
}

const getBasesSuccess = (state, action) => {
    return {
        ...state,
        bases: action.bases
    }
}

const getBasesFail = (state, action) => {
    return {
        ...state,
        error: action.error
    }
}

// SAUCES

const getSaucesStart = (state, action) => {
    return {
        ...state,
        loading: true
    }
}

const getSaucesSuccess = (state, action) => {
    return {
        ...state,
        sauces: action.sauces
    }
}

const getSaucesFail = (state, action) => {
    return {
        ...state,
        error: action.error
    }
}

// INGREDIENTS

const getIngredientsStart = (state, action) => {
    return {
        ...state,
        loading: true
    }
}

const getIngredientsSuccess = (state, action) => {
    return {
        ...state,
        ingredients: action.ingredients
    }
}

const getIngredientsFail = (state, action) => {
    return {
        ...state,
        error: action.error
    }
}

// EXTRA INGREDIENTS

const getExtraIngredientsStart = (state, action) => {
    return {
        ...state,
        loading: true
    }
}

const getExtraIngredientsSuccess = (state, action) => {
    return {
        ...state,
        extraIngredients: action.extraIngredients
    }
}

const getExtraIngredientsFail = (state, action) => {
    return {
        ...state,
        error: action.error
    }
}

// next

const nextStep = (state, action) => {
    return {
        ...state,
        step: action.step
    }
}

const backStep = (state, action) => {
    return {
        ...state,
        step: action.step
    }
}

const reducer = (state, action) => {
    switch (action.type) {
        case actionTypes.GET_BOWLS_START:
            return getBowlsStart(state, action)
        case actionTypes.GET_BOWLS_SUCCESS:
            return getBowlsSuccess(state, action)
        case actionTypes.GET_BOWLS_FAIL:
            return getBowlsFail(state, action)

        case actionTypes.GET_SIZES_START:
            return getSizesStart(state, action)
        case actionTypes.GET_SIZES_SUCCESS:
            return getSizesSuccess(state, action)
        case actionTypes.GET_SIZES_FAIL:
            return getSizesFail(state, action)

        case actionTypes.GET_BASES_START:
            return getBasesStart(state, action)
        case actionTypes.GET_BASES_SUCCESS:
            return getBasesSuccess(state, action)
        case actionTypes.GET_BASES_FAIL:
            return getBasesFail(state, action)

        case actionTypes.GET_SAUCES_START:
            return getSaucesStart(state, action)
        case actionTypes.GET_SAUCES_SUCCESS:
            return getSaucesSuccess(state, action)
        case actionTypes.GET_SAUCES_FAIL:
            return getSaucesFail(state, action)

        case actionTypes.GET_INGREDIENTS_START:
            return getIngredientsStart(state, action)
        case actionTypes.GET_INGREDIENTS_SUCCESS:
            return getIngredientsSuccess(state, action)
        case actionTypes.GET_INGREDIENTS_FAIL:
            return getIngredientsFail(state, action)

        case actionTypes.GET_EXTRA_INGREDIENTS_START:
            return getExtraIngredientsStart(state, action)
        case actionTypes.GET_EXTRA_INGREDIENTS_SUCCESS:
            return getExtraIngredientsSuccess(state, action)
        case actionTypes.GET_EXTRA_INGREDIENTS_FAIL:
            return getExtraIngredientsFail(state, action)


        case actionTypes.NEXT_STEP:
            return nextStep(state, action)
        case actionTypes.BACK_STEP:
            return backStep(state, action)
        default:
            return state
    }
}

export { initState }
export default reducer