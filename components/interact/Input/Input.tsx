import React from 'react'
import {Input as InputField, Label} from './style'

interface InputProps {
    name: string;
    label: string;
    type: string;
}

const Input: React.FC<InputProps> = ({name, label, type}) => {
    return (
        <div>
            <Label htmlFor={`input_${name}`}>{label}</Label>
            <InputField type={type} name={name} id={`input_${name}`}/>
        </div>
    )
}

export default Input