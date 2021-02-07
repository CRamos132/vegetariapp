import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import Button from '../../../components/interact/Button/Button'

describe ("Button", () => {
    it("displays the button title when passed", async () => {
        render(<Button data-testid="test-button">Test</Button>)
        const button = await screen.findByTestId('test-button')
        expect(button).toHaveTextContent('Test', {selector: 'button'})
    });
    it("executes the function passed", async () => {
        const handleClick = jest.fn()
        const rightClick = { button: 1 }
        render(<Button data-testid="test-button" onClick={handleClick}>Test</Button>)
        const button = await screen.findByTestId('test-button')
        await waitFor(() => fireEvent.click(button, rightClick))
        expect(handleClick).toHaveBeenCalled()
    });
    it("properly displays style passed", async () => {
        render(<Button data-testid="test-button" backgroundColor='green' color='white'>Test</Button>)
        const button = await screen.findByTestId('test-button')
        expect(button).toHaveStyle("background-color: green; color: white")
    })
});