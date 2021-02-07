import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import {TestThemeWrapper} from '../index.test'
import Input from '../../../components/interact/Input/Input'

const setup = () => {
    const utils = render(<TestThemeWrapper><Input label='Test label' /></TestThemeWrapper>)
    const input = utils.getByLabelText('Test label')
    return {
      input,
      ...utils,
    }
  }

describe('Input', () => {
    it('should display the correct label', async () => {
        const {input} = setup()
        expect(input).toBeInTheDocument()
    });
    it('should display the correct value', async () => {
        const {input} = setup()
        fireEvent.change(input, {target: {value: 'test value'}})
        expect(input.value).toBe('test value')
    })
})