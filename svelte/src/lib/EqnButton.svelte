<script lang="ts">
    export let type: 'normal' | 'strong' | 'equals';
</script>
  
<div class="{type}"><slot></slot></div>
  
<style>
  div {
    display: flex;
    width: 50px;
    height: 50px;
    border-radius: 3px;
    justify-content: center;
    align-items: center;
  }
  .normal {
    background-color: #04d88a;
    color: #007C63;
  }
  .strong {
    background-color: #03a578;
    color: #b5ffe4;
  }
  .equals {
    background-color: #f1b707;
    color: #007c63;
  }
</style>