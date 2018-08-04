<template>
  <div class="hello">
    <at-steps :current='current' direction="vertical">
      <at-step title="Promo" description="Create your first promo."></at-step>
      <at-step title="Store" description="Setup your first store."></at-step>
      <at-step title="Finish" description="Welcome! :-)"></at-step>
    </at-steps>
    <content v-if="current == 0">
      <input class="promo" type="text" placeholder="Type your promo code" tabindex="-1">
      <textarea class="promo" placeholder="Type or paste (⌘+V) your promo description here. This information will be shown to the user." rows="8"></textarea>
      <at-button type="primary" size="large" @click="next()">Next</at-button>
    </content>
    <content v-if="current == 1">
      <input class="promo" type="text" placeholder="Type your store name">
      <textarea class="promo" placeholder="Type or paste (⌘+V) your store description here. This information will be shown to the user." rows="8"></textarea>
      <at-button size="large" @click="prev()">Prev</at-button>
      <at-button type="primary" size="large" @click="next()">Next</at-button>
    </content>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data() {
    return {
      current: 0,
    };
  },
  methods: {
    next() {
      this.current++;
    },
    prev() {
      this.current--;
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.hello{
  width: 100%;
  height: 100%;
  position: fixed;
  background: #fff;
  display: flex;
  align-items: center;
  justify-content: center;
}

content{
  width: 600px;
}

.at-steps{
  position: absolute;
  top: 50px;
  left: 50px;
  bottom: 50px;
  width: 300px;
}

input.promo{
  font-size: 28px;
  border: 0;
  font-weight: 600;
  width: 100%;
}

textarea.promo{
  border: 0;
  width: 100%;
  font-size: 18px;
}
</style>
