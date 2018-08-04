<template>
  <div id="add-store" class="dialog">
    <Esc></Esc>
    <content>
      <h1 class="title">Add store</h1>
      <sui-form-field>
        <label>Name</label>
        <sui-input placeholder="Your store" />
      </sui-form-field>
      <sui-form-field>
        <label>Address</label>
        <sui-input placeholder="Address" />
      </sui-form-field>
      <sui-form-field>
        <label>Description</label>
        <textarea rows="5" placeholder="Description"></textarea>
      </sui-form-field>
      <sui-form-field class="buttons">
        <sui-button primary>Save</sui-button>
      </sui-form-field>
    </content>
  </div>
</template>

<script>
import Esc from '../components/Esc';

export default {
  components: {
    Esc,
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  #add-store{
    width: 100%;
    height: 100%;
    position: fixed;
    background: #f6f8fa;
    display: flex;
    align-items: center;
    justify-content: center;
  }
</style>
