import styled from "@emotion/styled";
import React from "react";

type ButtonType = 'normal' | 'strong' | 'equals';

interface EqnButtonProps {
    type: ButtonType;
    children: string;
    onClick?: React.MouseEventHandler<HTMLDivElement>;
}

const EqnButton = (props: EqnButtonProps) => {
    return <Button $type={props.type} onClick={props.onClick} className="eqn-button">{props.children}</Button>;
}

const Button = styled.div<{$type: ButtonType}>`
    display: flex;
    width: 50px;
    height: 50px;
    border-radius: 3px;
    background-color:  ${({$type})=> {
        if ($type === 'normal') {
            return '#04d88a'; 
        } else if ($type === 'strong') {
            return '#03a578'; 
        } else {
            return '#f1b707'; 
        }; 
    }};
    color: ${({$type})=> {
        if ($type === 'normal') {
            return '#007C63'; 
        } else if ($type === 'strong') {
            return '#b5ffe4'; 
        } else {
            return '#007C63'; 
        }; 
    }};
    justify-content: center;
    align-items: center;
`;

export default EqnButton;