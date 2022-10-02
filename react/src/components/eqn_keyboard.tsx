import React from "react";
import styled from "@emotion/styled";
import EqnButton from "./eqn_button";

const EqnKeyboard = (properties: {onKeyPressed: (s: string) => void}) => {
    const onClick: React.MouseEventHandler<HTMLDivElement> = (event): void => {
        const target = event.target as HTMLDivElement;
        if (target.classList.contains('eqn-button')) {
            properties.onKeyPressed(target.innerText);
        }
    }
    return (
        <div onClick={onClick}>
            <Row>
                <EqnButton type="strong">(</EqnButton>
                <EqnButton type="strong">)</EqnButton>
                <EqnButton type="strong">%</EqnButton>
                <EqnButton type="strong">AC</EqnButton>
            </Row>
            <Row>
                <EqnButton type="normal">7</EqnButton>
                <EqnButton type="normal">8</EqnButton>
                <EqnButton type="normal">9</EqnButton>
                <EqnButton type="strong">/</EqnButton>
            </Row>
            <Row>
                <EqnButton type="normal">4</EqnButton>
                <EqnButton type="normal">5</EqnButton>
                <EqnButton type="normal">6</EqnButton>
                <EqnButton type="strong">x</EqnButton>
            </Row>
            <Row>
                <EqnButton type="normal">1</EqnButton>
                <EqnButton type="normal">2</EqnButton>
                <EqnButton type="normal">3</EqnButton>
                <EqnButton type="strong">-</EqnButton>
            </Row>
            <Row>
                <EqnButton type="normal">0</EqnButton>
                <EqnButton type="normal">.</EqnButton>
                <EqnButton type="equals">=</EqnButton>
                <EqnButton type="strong">+</EqnButton>
            </Row>
        </div>
    );
}

const Row = styled.div`
    display: flex;
    flex-direction: row;
    div + div {
        margin-left: 10px;
    };
    & div {
        margin-top: 10px;
    };
`;

export default EqnKeyboard;