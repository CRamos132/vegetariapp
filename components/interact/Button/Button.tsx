import React from 'react'
import {Button as BtnInput, ImgWrapper} from './style'

interface ButtonProps {
    type?: "button" | "submit" | "reset" | undefined;
    backgroundColor?: string;
    color?: string;
    icon?: string;
    iconAlt?: string;
    onClick?: () => void;
}

const Button: React.FC<ButtonProps> = ({
    children,
    type = 'button',
    backgroundColor = '#205e3b',
    color = 'white',
    icon,
    iconAlt,
    onClick,
    ...properties
}) => {
    const handleClick = () => {
        if(onClick){
            onClick()
        }
    }
    return (
        <BtnInput
            type={type}
            backgroundColor={backgroundColor}
            color={color}
            onClick={handleClick}
            {...properties}
        >
            {icon ? (
                <ImgWrapper>
                    <img src={icon} alt={iconAlt} />
                </ImgWrapper>
            ) : undefined}
            {children}
        </BtnInput>
    );
};

export default Button