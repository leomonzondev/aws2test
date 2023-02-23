import { useState } from "react";

export const useForm = ( initialForm = {}) => {
    

    const [formState, setFormState] = useState( initialForm )


    const onResetForm = ()=>{
        setFormState(initialForm)
    }

    const onInputChange = ({ target }) => {
        const { name, value } = target
        setFormState({
            ...formState,
            [name]: value
        })
    }
    // console.log(initialForm);
    return {
        ...formState,
        formState,
        setFormState, 
        onInputChange,
        onResetForm
    }
}
