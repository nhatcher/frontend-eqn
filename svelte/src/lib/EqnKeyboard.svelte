<script lang="ts">
    import EqnButton from "./EqnButton.svelte";
    import { createEventDispatcher } from 'svelte';

    const dispatch = createEventDispatcher();
    function onClick(event: MouseEvent) {
        const target = event.target as HTMLElement;
        const parent = target.parentElement;
        if (parent.classList.contains('eqn-button')) {
            dispatch('message', {
			    text: target.textContent
		    });
        }
    }

</script>

<div on:click={onClick}>
    <div class="eqn-row">
        <div class="eqn-button"><EqnButton type="strong">(</EqnButton></div>
        <div class="eqn-button"><EqnButton type="strong">)</EqnButton></div>
        <div class="eqn-button"><EqnButton type="strong">%</EqnButton></div>
        <div class="eqn-button"><EqnButton type="strong">AC</EqnButton></div>
    </div>
    <div class="eqn-row">
        <div class="eqn-button"><EqnButton type="normal">7</EqnButton></div>
        <div class="eqn-button"><EqnButton type="normal">8</EqnButton></div>
        <div class="eqn-button"><EqnButton type="normal">9</EqnButton></div>
        <div class="eqn-button"><EqnButton type="strong">/</EqnButton></div>
    </div>
    <div class="eqn-row">
        <div class="eqn-button"><EqnButton type="normal">4</EqnButton></div>
        <div class="eqn-button"><EqnButton type="normal">5</EqnButton></div>
        <div class="eqn-button"><EqnButton type="normal">6</EqnButton></div>
        <div class="eqn-button"><EqnButton type="strong">x</EqnButton></div>
    </div>
    <div class="eqn-row">
        <div class="eqn-button"><EqnButton type="normal">1</EqnButton></div>
        <div class="eqn-button"><EqnButton type="normal">2</EqnButton></div>
        <div class="eqn-button"><EqnButton type="normal">3</EqnButton></div>
        <div class="eqn-button"><EqnButton type="strong">-</EqnButton></div>
    </div>
    <div class="eqn-row">
        <div class="eqn-button"><EqnButton type="normal">0</EqnButton></div>
        <div class="eqn-button"><EqnButton type="normal">.</EqnButton></div>
        <div class="eqn-button"><EqnButton type="equals">=</EqnButton></div>
        <div class="eqn-button"><EqnButton type="strong">+</EqnButton></div>
    </div>
</div>

<style>
    .eqn-row {
        display: flex;
        flex-direction: row;
    }
    .eqn-button + .eqn-button {
        margin-left: 10px;
    }
    .eqn-row + .eqn-row {
        margin-top: 10px;
    }
</style>