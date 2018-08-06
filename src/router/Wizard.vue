<template>
  <div class="hello">
    <div class="center-block">
      <div class="steps">
        <at-steps :current='current' direction="vertical">
          <at-step title="Promo" description="Create your first promo."></at-step>
          <at-step title="Store" description="Setup your first store."></at-step>
          <at-step title="Finish" description="Welcome! :-)"></at-step>
        </at-steps>

        <at-button v-if="current != 0" size="large" @click="prev()">Prev</at-button>
        <at-button type="primary" size="large" @click="next()">Next</at-button>
      </div>
      <content v-if="current == 0">
        <input class="promo" type="text" placeholder="Type your promo code" tabindex="-1">
        <textarea
          class="promo"
          :placeholder="placeholder"
          rows="8"></textarea>
      </content>
      <content v-if="current == 1">
        <input class="promo" type="text" placeholder="Type your store name">
        <textarea
          class="promo"
          placeholder="Type or paste (⌘+V) your store description here. This information will be shown to the user."
          rows="8"></textarea>
      </content>
    </div>

    <div id="lolita"></div>
  </div>
</template>

<script>
export default {
  name: 'Wizard',
  data() {
    return {
      current: 0,
      placeholder: 'Type or paste (⌘+V) your promo description here. This information will be shown to the user.',
    };
  },
  methods: {
    next() {
      this.current += 1;
    },
    prev() {
      this.current -= 1;
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

.center-block{
  display: flex;
}

.at-steps{
  padding-right: 50px;
  padding-bottom: 30px;
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
