import { ThemeProvider } from 'styled-components'
import { render, screen } from "@testing-library/react";
import Home from "../../pages/index";

const theme = {
    colors: {
      background: "#205e3b",
      text: "#FFFFFF",
      primary: "#e1e1e6",
    },
  };
  

describe("App", () => {
  it("renders without crashing", () => {
    render(<ThemeProvider theme={theme}><Home /></ThemeProvider>);
    const text = screen.getByTestId('title')
    // expect(text).toBeInTheDocument();
    expect(text).toBeInTheDocument()
  });
});