import styled from "@emotion/styled";
import React from "react";

interface EqnButtonProps {
    type: 'normal' | 'strong' | 'equals';
    children: string;
    onClick?: React.MouseEventHandler<HTMLDivElement>;
}

const EqnButton = (props: EqnButtonProps) => {
    return <Button onClick={props.onClick} className="eqn-button">{props.children}</Button>;
}

const Button = styled.div`
    display: flex;
    width: 50px;
    height: 50px;
    border-radius: 3px;
    background-color: #04d88a;
    color: #007C63;
    justify-content: center;
    align-items: center;
`;

export default EqnButton;