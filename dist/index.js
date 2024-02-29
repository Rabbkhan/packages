import * as React from 'react';

const Button = ({ children }) => {
    return (React.createElement("button", { style: {
            padding: "10px 20px",
            fontSize: "1.2rem",
            borderRadius: "5px",
            cursor: "pointer",
            backgroundColor: "blue",
            color: "white",
            border: "none",
        } }, children));
};

const useCounter = () => {
    const [count, setCount] = React.useState(0);
    const increment = () => {
        setCount(count + 1);
    };
    const decrement = () => {
        setCount(count - 1);
    };
    return { count, increment, decrement };
};

export { Button, useCounter };
