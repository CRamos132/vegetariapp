import styled from 'styled-components';

interface Props {
    backgroundColor: string;
    color: string;
}

const Button = styled.button<Props>`
    background-color: ${properties => properties.backgroundColor};
    color: ${properties => properties.color};
    padding: 5px;
    border: 1px solid ${properties => properties.backgroundColor};
    border-radius: 12px;
    min-width: 100px;
    transition: 0.3s;
    text-align: center;
    font-size: 16px;
    font-weight: bold;
    cursor: pointer;
    &:hover:not(:disabled) {
        color: ${properties => properties.backgroundColor};
        background-color: ${properties => properties.color};
    }
    &:disabled {
        opacity: 0.7;
        background-color: #b9b9b9;
        color: white;
        border: 1px solid gray;
        cursor: not-allowed;
    }
`;

const ImgWrapper = styled.div`
    width: 100%;
    text-align: center;
`;

export { Button, ImgWrapper };