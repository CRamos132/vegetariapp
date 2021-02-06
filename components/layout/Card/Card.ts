import styled, {keyframes} from 'styled-components'

const enter = keyframes`
    0% {
        transform: translateX(-100%);
        opacity: 0;
    }
    100% {
        transform: translateX(0%);
        opacity: 1;
    }
`

const Card = styled.div`
    height: 200px;
    width: 40vw;
    margin: 10px;
    animation: ${enter} 0.8s;
    opacity: 0;
    animation-fill-mode: forwards;
    background-color: gainsboro;
`

export default Card