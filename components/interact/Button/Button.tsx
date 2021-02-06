import React from 'react'
import {Button as BtnInput, ImgWrapper} from './style'

interface ButtonProps {
    type?: "button" | "submit" | "reset" | undefined;
    backgroundColor?: string;
    color?: string;
    icon?: string;
    iconAlt?: string;
}

const Button: React.FC<ButtonProps> = ({
    children,
    type = 'button',
    backgroundColor = '#205e3b',
    color = 'white',
    icon,
    iconAlt,
    ...properties
}) => {
    return (
        <BtnInput
            type={type}
            backgroundColor={backgroundColor}
            color={color}
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