<script lang="ts">
    import EqnDisplay from "./EqnDisplay.svelte";
    import EqnKeyboard from "./EqnKeyboard.svelte";
    function onKeyPressed(event) {
        display = `${display}${event.detail.text}`;
    }
    let display = '';

</script> 
  
<EqnDisplay>{display}</EqnDisplay>
<EqnKeyboard on:message={onKeyPressed}/>

<style>
  
</style>