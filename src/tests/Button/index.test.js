import { render, screen } from "@testing-library/react";
import Button from '../../../components/interact/Button/Button'

describe ("Button", () => {
    it("displays the button title when passed", async () => {
        render(<Button data-testid="test-button">Test</Button>)
        const button = await screen.findByTestId('test-button')
        expect(button).toHaveTextContent('Test', {selector: 'button'})
    });
});