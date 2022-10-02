import type { JSX } from 'solid-js';

import styles from './App.module.css';

const EqnButton = (props: {type: string; children:JSX.Element}) => {
    const color = {
        normal: '#007C63',
        strong: '#b5ffe4',
        equals: '#007c63'
    } [props.type];

    const backgroundColor = {
        normal: '#04d88a',
        strong: '#03a578',
        equals: '#f1b707'
    } [props.type];
    return (<div class={styles.Button} style={{
    color: color,
    'background-color': backgroundColor
  }}>{props.children}</div>);
}

export default EqnButton;
