import { useReducer, createContext, useCallback } from 'react'
import reducer, { initState } from '../reducers/reducer'
import * as action from '../actions/actions'
import { apiCall } from '../../services/api'

export const StoreContext = createContext();

const StoreContextProvider = ({ children }) => {
    const [state, dispatch] = useReducer(reducer, initState)

    const getBowls = useCallback(() => {
        dispatch(action.getBowlsStart())
        apiCall('get', '/bowls')
            .then((res) => {
                dispatch(action.getBowlsSuccess(res))
            })
            .catch((error) => {
                dispatch(action.getBowlsFail(error))
            })
    }, [])

    const getSizes = useCallback(() => {
        dispatch(action.getSizesStart())
        apiCall('get', '/sizes')
            .then((res) => {
                dispatch(action.getSizesSuccess(res))
            })
            .catch((error) => {
                dispatch(action.getSizesFail(error))
            })
    },[])

    const getBases = useCallback(() => {
        dispatch(action.getBasesStart())
        apiCall('get', '/bases')
            .then((res) => {
                dispatch(action.getBasesSuccess(res.data.data))
            })
            .catch((error) => {
                dispatch(action.getBasesFail(error))
            })
    },[])

    const getSauces = useCallback(() => {
        dispatch(action.getSaucesStart())
        apiCall('get', '/sauces')
            .then((res) => {
                dispatch(action.getSaucesSuccess(res.data.data))
            })
            .catch((error) => {
                dispatch(action.getSaucesFail(error))
            })
    },[])

    const getIngredients = useCallback(() => {
        dispatch(action.getIngredietsStart())
        apiCall('get', '/ingredients')
            .then((res) => {
                dispatch(action.getIngredietsSuccess(res.data.data))
            })
            .catch((error) => {
                dispatch(action.getIngredietsFail(error))
            })
    },[])

    const getExtraIngredients = useCallback(() => {
        dispatch(action.getExtraIngredientsStart())
        apiCall('get', '/extra_ingredients')
            .then((res) => {
                dispatch(action.getExtraIngredientsSuccess(res.data.data))
            })
            .catch((error) => {
                dispatch(action.getExtraIngredientsFail(error))
            })
    },[])

    const nextStep = (activStep) => {
        dispatch(action.nextStepAction(activStep))
    }

    const backStep = (activStep) => {
        dispatch(action.backStepAction(activStep))
    }



    return (
        <StoreContext.Provider
            value={{
                bowls: state.bowls,
                sizes: state.sizes,
                bases: state.bases,
                sauces: state.sauces,
                ingredients: state.ingredients,
                extraIngredients: state.extraIngredients,
                step: state.step,
                getBowls,
                getSizes,
                getBases,
                getSauces,
                getIngredients,
                getExtraIngredients,
                nextStep,
                backStep,

            }}
        >
            {children}
        </StoreContext.Provider>
    )
}

export default StoreContextProvider