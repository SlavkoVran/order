import React, { useContext } from 'react'
import { StoreContext } from '../../store/contexts/StoreProvider'
import Step1 from '../../components/step1/Step1'
import Step2 from '../../components/step2/Step2'
import Step3 from '../../components/step3/Step3'
import Step4 from '../../components/step4/Step4'
import Step5 from '../../components/step5/Step5'
import Step6 from '../../components/step6/Step6'
import StepCounter from '../../components/stepCounter/StepCounter';

const Home = () => {
    const {
        bowls,
        sizes,
        bases,
        sauces,
        ingredients,
        extraIngredients,
        getBowls,
        getSizes,
        getBases,
        getSauces,
        getIngredients,
        getExtraIngredients,
        step,
    } = useContext(StoreContext)

    const steps = (step) => {
        switch (step) {
            case 0:
                return
            case 1:
                return <Step1 bowls={bowls} getBowls={getBowls} />
            case 2:
                return <Step2 sizes={sizes} getSizes={getSizes} />
            case 3:
                return <Step3 bases={bases} getBases={getBases} />
            case 4:
                return <Step4 sauces={sauces} getSauces={getSauces} />
            case 5:
                return <Step5 ingredients={ingredients} getIngredients={getIngredients} />
            case 6:
                return <Step6 extraIngredients={extraIngredients} getExtraIngredients={getExtraIngredients} />
            default:
                return
        }
    }

    return (
        <div>
            <div className='homeContainer'>
                {steps(step)}
            </div>
            <StepCounter />
        </div>

    )
}

export default Home