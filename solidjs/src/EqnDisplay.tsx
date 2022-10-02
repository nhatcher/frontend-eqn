import type { JSX } from 'solid-js';

import styles from './App.module.css';

const EqnDisplay = (props: {children:JSX.Element} ) => {
  return (<div class={styles.Display}>{props.children}</div>);
}

export default EqnDisplay;