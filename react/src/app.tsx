import React, { useCallback, useState } from "react";
import ReactDOM from "react-dom/client";
import EqnDisplay from "./components/eqn_display";
import EqnKeyboard from "./components/eqn_keyboard";
import calculate from "./eqn/main";

const App = () => {
    const [display, setDisplay] = useState('');

    const onKeyPressed = (key: string): void => {
        const result = calculate(key, display);
        setDisplay(result);
    }
    
    return (
        <>
            <EqnDisplay><span>{display}</span></EqnDisplay>
            <EqnKeyboard onKeyPressed={onKeyPressed}/>
        </>
    );
};

 
const root = ReactDOM.createRoot(
    document.getElementById('root') as HTMLDivElement
);
root.render(<App />);
