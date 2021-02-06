import styled from 'styled-components'

const Input = styled.input`
    width: 100%;
    border: solid 1px ${(props) => props.theme.colors.background};
    border-radius: 12px;
    font-size: 16px;
    padding: 5px;
`
const Label = styled.label`
    font-size: 18px;
    color: ${(props) => props.theme.colors.background};
`

export {Input, Label};