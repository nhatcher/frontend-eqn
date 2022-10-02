import styled from "@emotion/styled";
import React from "react";

interface EqnDisplayProps {
    children: JSX.Element;
}

const EqnDisplay = ({children}: EqnDisplayProps) => {
    return (
        <Display>{children}</Display>
    );
}

const Display = styled.div`
    display: flex;
    width: 230px;
    height: 50px;
    border: 1px solid grey;
    background-color: aliceblue;
    margin-bottom: 10px;
    align-items: center;
    font-size: 20px;
    padding: 5px;
    box-sizing: border-box;
    flex-direction: row-reverse;
`;

export default EqnDisplay;