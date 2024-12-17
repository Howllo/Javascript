import { render, screen, fireEvent } from "@testing-library/react";
import Counter from "./Counter";

describe("Test the counter counter component.", ()=>{
    test("Test the Increment Counter", () =>{
        // Arange 
        render(<Counter/>)
        const counter = screen.getByTestId("counter");
        const incrementBtn = screen.getByTestId("increment");
    
        // Act - Interact with the element
        fireEvent.click(incrementBtn);
    
        // Assert
        expect(counter).toHaveTextContent("1");
    })
    
    test("Test the Decrement Counter", () =>{
        // Arange 
        render(<Counter/>)
        const counter = screen.getByTestId("counter");
        const decrementBtn = screen.getByTestId("decrement");
    
        // Act - Interact with the element
        fireEvent.click(decrementBtn);
    
        // Assert
        expect(counter).toHaveTextContent("-1");
    })
})