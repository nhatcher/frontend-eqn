import { Component, createSignal } from 'solid-js';

import styles from './App.module.css';
import EqnButton from './EqnButton';
import EqnDisplay from './EqnDisplay';

const App: Component = () => {
  const [display, setDisplay] = createSignal('');
  function onClick(event: MouseEvent) {
    const target = event.target as HTMLDivElement;
    setDisplay(display() + target.textContent);
  };
  return (
      <>
          <EqnDisplay>{display()}</EqnDisplay>
          <div onClick={onClick}>
              <div class={styles.Row}>
                  <EqnButton type="strong">(</EqnButton>
                  <EqnButton type="strong">)</EqnButton>
                  <EqnButton type="strong">%</EqnButton>
                  <EqnButton type="strong">AC</EqnButton>
              </div>
              <div class={styles.Row}>
                  <EqnButton type="normal">7</EqnButton>
                  <EqnButton type="normal">8</EqnButton>
                  <EqnButton type="normal">9</EqnButton>
                  <EqnButton type="strong">/</EqnButton>
              </div>
              <div class={styles.Row}>
                  <EqnButton type="normal">4</EqnButton>
                  <EqnButton type="normal">5</EqnButton>
                  <EqnButton type="normal">6</EqnButton>
                  <EqnButton type="strong">x</EqnButton>
              </div>
              <div class={styles.Row}>
                  <EqnButton type="normal">1</EqnButton>
                  <EqnButton type="normal">2</EqnButton>
                  <EqnButton type="normal">3</EqnButton>
                  <EqnButton type="strong">-</EqnButton>
              </div>
              <div class={styles.Row}>
                  <EqnButton type="normal">0</EqnButton>
                  <EqnButton type="normal">.</EqnButton>
                  <EqnButton type="equals">=</EqnButton>
                  <EqnButton type="strong">+</EqnButton>
              </div>
          </div>
      </>
  );
};

export default App;
