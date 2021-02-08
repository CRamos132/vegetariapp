import React from 'react'
import {Input as InputField, Label} from './style'

interface InputProps {
    name: string;
    label: string;
    placeholder: string;
    type?: string;
}

const Input: React.FC<InputProps> = ({name, label, placeholder, type = 'text'}) => {
    return (
        <div>
            <Label htmlFor={`input_${name}`}>{label}</Label>
            <InputField type={type} name={name} id={`input_${name}`} placeholder={placeholder}/>
        </div>
    )
}

export default Input